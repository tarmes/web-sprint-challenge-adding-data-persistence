
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'graduate', description: 'its about time!', completed: false },
        {id: 2, name: 'grow up', description: 'everybody needs to do it at some point', completed: false },
        {id: 3, name: 'win win win', description: 'you know what it is', completed: true }
      ]);
    });
};
