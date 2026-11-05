/// <reference path="../pb_data/types.d.ts" />
// Joining and leaving a course group. An API rule can't tell whether a request
// only adds or removes the caller, so course_instance.students is read-only
// through the records API. Routes aren't subject to rules, so they check
// everything the UI does themselves.
routerAdd("POST", "/api/lms/course-instances/{id}/enrollment", (e) => {
  e.app.runInTransaction((tx) => {
    const instance = tx.findRecordById("course_instance", e.request.pathValue("id"))
    const students = instance.getStringSlice("students")
    const offered = [...e.auth.getStringSlice("courses"), ...e.auth.getStringSlice("completed_courses")]

    if (!offered.includes(instance.getString("course"))) {
      throw new ForbiddenError("Ez a tárgy nem vehető fel.")
    }
    if (students.includes(e.auth.id)) {
      throw new BadRequestError("Már felvetted ezt a tárgyat.")
    }
    if (students.length >= instance.getInt("max_students")) {
      throw new BadRequestError("A csoport betelt.")
    }

    instance.set("students+", e.auth.id)
    tx.save(instance)
  })

  return e.noContent(204)
}, $apis.requireAuth("users"))

routerAdd("DELETE", "/api/lms/course-instances/{id}/enrollment", (e) => {
  e.app.runInTransaction((tx) => {
    const instance = tx.findRecordById("course_instance", e.request.pathValue("id"))

    if (!instance.getStringSlice("students").includes(e.auth.id)) {
      throw new BadRequestError("Nem vetted fel ezt a tárgyat.")
    }

    instance.set("students-", e.auth.id)
    tx.save(instance)
  })

  return e.noContent(204)
}, $apis.requireAuth("users"))
