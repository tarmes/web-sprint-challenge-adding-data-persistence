// build your `Resource` model here
const db = require('../../data/dbConfig');

module.exports = {
   getAll() {
      return db('resources');
   },
   create(project) {
      return db('resources').insert(project)
         .then(([id]) => {
            return db('resources').where('id', id).first()
         })
   }
}