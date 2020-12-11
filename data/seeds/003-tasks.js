
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'take the trash out', notes: 'theyre grrrrrrrosss!', completed: false, resource_id: 1, project_id: 3 },
        {id: 2, description: 'read read read', completed: true, resource_id: 2, project_id: 1 },
        {id: 3, description: 'touch my toes', completed: false, resource_id: 3, project_id: 2 }
      ]);
    });
};
