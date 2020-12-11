// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
   getAll() {
      return db('tasks');
   },
   create(task) {
      return db('tasks').insert(task)
         .then(([id]) => {
            return db('tasks').where('id', id).first()
         })
   }
}