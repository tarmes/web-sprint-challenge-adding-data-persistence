
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'gold', description: 'found in the mountains of the underearth'},
        {id: 2, name: 'books', description: 'rigorously bounded to the spine of the staircase'},
        {id: 3, name: 'knowledge', description: 'extends to every atom empty and full'}
      ]);
    });
};
