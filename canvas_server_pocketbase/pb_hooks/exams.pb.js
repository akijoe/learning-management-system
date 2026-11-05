/// <reference path="../pb_data/types.d.ts" />
// Exam sign-up and grading. exams and exam_results are read-only through the
// records API (see enrollment.pb.js for why), so these are the only ways to
// change them apart from the admin UI.
routerAdd("POST", "/api/lms/exams/{id}/signup", (e) => {
  let exam

  e.app.runInTransaction((tx) => {
    exam = tx.findRecordById("exams", e.request.pathValue("id"))
    const me = e.auth.id

    const course = tx.findFirstRecordByFilter("courses", "exams.id ?= {:exam}", { exam: exam.id })
    const groups = tx.findRecordsByFilter(
      "course_instance", "course = {:course} && students.id ?= {:me}", "", 1, 0, { course: course.id, me },
    )
    if (groups.length === 0) {
      throw new ForbiddenError("Csak felvett tárgyból lehet vizsgázni.")
    }

    const prerequisites = course.getStringSlice("prerequisites")
    const completed = e.auth.getStringSlice("completed_courses")
    if (prerequisites.length > 0 && !prerequisites.some((id) => completed.includes(id))) {
      throw new ForbiddenError("Az előkövetelmények nem teljesülnek.")
    }

    const courseExams = course.getStringSlice("exams").map((id) => tx.findRecordById("exams", id))
    if (courseExams.some((other) => other.getStringSlice("participants").includes(me))) {
      throw new BadRequestError("Már jelentkeztél vizsgára ebből a tárgyból.")
    }

    const failures = courseExams
      .flatMap((other) => other.getStringSlice("results"))
      .map((id) => tx.findRecordById("exam_results", id))
      .filter((result) => result.getString("student") === me && result.getInt("result") === 1)
    if (failures.length >= course.getInt("exams_maximum_attempts")) {
      throw new ForbiddenError("Felhasználtad az összes vizsgalehetőséget.")
    }

    if (exam.getDateTime("time").unix() <= new DateTime().unix()) {
      throw new BadRequestError("Ez a vizsga már elmúlt.")
    }
    if (exam.getStringSlice("participants").length >= exam.getInt("maximum_participants")) {
      throw new BadRequestError("A vizsga megtelt.")
    }

    exam.set("participants+", me)
    tx.save(exam)
  })

  return e.json(200, exam)
}, $apis.requireAuth("users"))

routerAdd("DELETE", "/api/lms/exams/{id}/signup", (e) => {
  e.app.runInTransaction((tx) => {
    const exam = tx.findRecordById("exams", e.request.pathValue("id"))

    if (!exam.getStringSlice("participants").includes(e.auth.id)) {
      throw new BadRequestError("Nem jelentkeztél erre a vizsgára.")
    }

    exam.set("participants-", e.auth.id)
    tx.save(exam)
  })

  return e.noContent(204)
}, $apis.requireAuth("users"))

// Grades a participant, only for the judges of the exam.
routerAdd("POST", "/api/lms/exams/{id}/results", (e) => {
  const { student, result, comment } = e.requestInfo().body

  e.app.runInTransaction((tx) => {
    const exam = tx.findRecordById("exams", e.request.pathValue("id"))

    if (!exam.getStringSlice("judges").includes(e.auth.id)) {
      throw new ForbiddenError("Csak a vizsga értékelői írhatnak be jegyet.")
    }
    if (!exam.getStringSlice("participants").includes(student)) {
      throw new BadRequestError("A diák nem jelentkezett erre a vizsgára.")
    }

    const entry = new Record(tx.findCollectionByNameOrId("exam_results"))
    entry.set("student", student)
    entry.set("judge", e.auth.id)
    entry.set("result", result)
    entry.set("comment", comment)
    tx.save(entry)

    exam.set("results+", entry.id)
    tx.save(exam)
  })

  return e.noContent(204)
}, $apis.requireAuth("users"))
