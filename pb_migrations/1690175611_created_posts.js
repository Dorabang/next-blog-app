migrate((db) => {
  const collection = new Collection({
    "id": "au6adtmec941na3",
    "created": "2023-07-24 05:13:31.505Z",
    "updated": "2023-07-24 05:13:31.505Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "erpynozc",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("au6adtmec941na3");

  return dao.deleteCollection(collection);
})
