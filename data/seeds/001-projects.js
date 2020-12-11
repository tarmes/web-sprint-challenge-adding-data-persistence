
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, description: 'lets hope this works', name: 'hello'},
        {id: 2, description: 'lets hope this works', name: 'goodbye'},
        {id: 3, description: 'lets hope this works', name: 'leggo'}
      ]);
    });
};
