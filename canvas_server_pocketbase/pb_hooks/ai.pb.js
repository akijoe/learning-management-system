/// <reference path="../pb_data/types.d.ts" />
// AI summary and flashcards of a course instance, for those who can view it.
// {kind} is "summary" or "flashcards".
routerAdd("POST", "/api/lms/course-instances/{id}/ai/{kind}", (e) => {
  const { generate } = require(`${__hooks}/lib/gemini.js`)

  const instance = e.app.findRecordById("course_instance", e.request.pathValue("id"))
  if (!e.app.canAccessRecord(instance, e.requestInfo(), instance.collection().viewRule)) {
    throw new NotFoundError()
  }

  return e.json(200, generate(instance, e.request.pathValue("kind")))
}, $apis.requireAuth("users"))
