// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
   getAll() {
      return db('tasks')
         .join('projects', 'projects.id', 'tasks.project_id')
         .select(
         'tasks.id', 
         'tasks.notes', 
         'tasks.description', 
         'tasks.completed', 
         'projects.name as project_name', 
         'projects.description as project_description'
         )
   },
   create(task) {
      return db('tasks').insert(task)
         .then(([id]) => {
            return db('tasks').where('id', id).first()
         })
         .then(task => {
            if (task.completed == 0) {
               task.completed = false;
            } else {
               task.completed = true;
            }
            return(task)
         })
   }
}