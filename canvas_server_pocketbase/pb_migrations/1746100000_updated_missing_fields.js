/// <reference path="../pb_data/types.d.ts" />
// Fields that existed in the original database but were never captured in a
// migration (they were added through the admin UI). The client relies on them
// (e.g. users.role, users.specialisation, courses.mandatory_in_spec).
migrate((app) => {
  const courses = app.findCollectionByNameOrId("pbc_955655590")

  courses.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_955655590",
    "hidden": false,
    "id": "relation860480311",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "prerequisites",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  courses.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1741138392",
    "maxSelect": 3,
    "name": "mandatory_in_spec",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": ["A", "B", "C"]
  }))

  courses.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1365672578",
    "maxSelect": 6,
    "name": "recommended_sem",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": ["1", "2", "3", "4", "5", "6"]
  }))

  app.save(courses)

  const users = app.findCollectionByNameOrId("_pb_users_auth_")

  users.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_955655590",
    "hidden": false,
    "id": "relation2846186060",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "courses",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  users.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3117851554",
    "maxSelect": 1,
    "name": "specialisation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": ["A", "B", "C", "None"]
  }))

  users.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": ["teacher", "student"]
  }))

  return app.save(users)
}, (app) => {
  const courses = app.findCollectionByNameOrId("pbc_955655590")
  courses.fields.removeById("relation860480311")
  courses.fields.removeById("select1741138392")
  courses.fields.removeById("select1365672578")
  app.save(courses)

  const users = app.findCollectionByNameOrId("_pb_users_auth_")
  users.fields.removeById("relation2846186060")
  users.fields.removeById("select3117851554")
  users.fields.removeById("select1466534506")
  return app.save(users)
})
