// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
   getAll() {
      return db('tasks');
   },
   create(project) {
      return db('tasks').insert(project)
         .then(([id]) => {
            return db('tasks').where('id', id).first()
         })
   }
}