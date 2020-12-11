// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
   getAll() {
      return db('projects');
   },
   create(project) {
      return db('projects').insert(project)
         .then(([id]) => {
            return db('projects').where('id', id).first()
         })
   }
}