/// <reference path="../pb_data/types.d.ts" />
// Access rules. Until now every rule was "", which lets anyone, logged in or
// not, read and change everything. A null rule means superusers only: self
// service writes (enrolment, exam sign-up, grading) can't be expressed as a
// rule, so they go through the routes in pb_hooks/ instead.
const LOGGED_IN = '@request.auth.id != ""'

const RULES = {
  // Students see themselves and teachers, teachers see everyone (for grading).
  users: {
    listRule: `${LOGGED_IN} && (id = @request.auth.id || role = "teacher" || @request.auth.role = "teacher")`,
    viewRule: `${LOGGED_IN} && (id = @request.auth.id || role = "teacher" || @request.auth.role = "teacher")`,
    createRule: null,
    updateRule: null,
    deleteRule: null,
  },
  courses: {
    listRule: LOGGED_IN,
    viewRule: LOGGED_IN,
    createRule: null,
    updateRule: null,
    deleteRule: null,
  },
  // Listing is needed to choose a group. The view rule also guards the
  // protected course files and the AI routes.
  course_instance: {
    listRule: LOGGED_IN,
    viewRule: `${LOGGED_IN} && (teacher = @request.auth.id || students.id ?= @request.auth.id)`,
    createRule: null,
    // Teachers edit the description and files of their own groups. :isset because
    // :changed misses additions to a multi-value relation.
    updateRule: "teacher = @request.auth.id" + [
      "course", "teacher", "students", "active_semester", "time_table", "max_students",
    ].map((field) => ` && @request.body.${field}:isset = false`).join(""),
    deleteRule: null,
  },
  exams: {
    listRule: LOGGED_IN,
    viewRule: LOGGED_IN,
    createRule: null,
    updateRule: null,
    deleteRule: null,
  },
  // Grades are only visible to the student and the judge who gave them.
  exam_results: {
    listRule: `${LOGGED_IN} && (student = @request.auth.id || judge = @request.auth.id)`,
    viewRule: `${LOGGED_IN} && (student = @request.auth.id || judge = @request.auth.id)`,
    createRule: null,
    updateRule: null,
    deleteRule: null,
  },
}

const setCourseFilesProtected = (app, value) => {
  const collection = app.findCollectionByNameOrId("course_instance")
  collection.fields.getByName("files").protected = value
  app.save(collection)
}

migrate((app) => {
  for (const [name, rules] of Object.entries(RULES)) {
    const collection = app.findCollectionByNameOrId(name)
    Object.assign(collection, rules)
    app.save(collection)
  }
  setCourseFilesProtected(app, true)
}, (app) => {
  setCourseFilesProtected(app, false)
  for (const [name, rules] of Object.entries(RULES)) {
    const collection = app.findCollectionByNameOrId(name)
    for (const rule of Object.keys(rules)) collection[rule] = ""
    app.save(collection)
  }
})
