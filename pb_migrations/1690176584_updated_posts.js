migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("au6adtmec941na3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y0ioiu1e",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("au6adtmec941na3")

  // remove
  collection.schema.removeField("y0ioiu1e")

  return dao.saveCollection(collection)
})
