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
         .then(project => {
            if (project.completed == 0) {
               project.completed = false;
            } else {
               project.completed = true;
            }
            return(project)
         })
   }
}