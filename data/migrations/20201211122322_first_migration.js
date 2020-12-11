
exports.up = function(knex) {
   return knex.schema
      .createTable('resources', table => {
         table.increments('id')
         table.string('name', 128).notNullable().unique()
         table.string('description', 128)
      })
      .createTable('projects', table => {
         table.increments('id')
         table.string('name', 128).notNullable()
         table.string('description', 128)
         table.boolean('completed').defaultTo(false)
      })
      .createTable('tasks', table => {
         table.increments('id')
         table.string('description', 128).notNullable()
         table.string('notes', 128)
         table.boolean('completed').defaultTo(false)
         table.integer('resource_id')
            .unsigned().notNullable()
            .references('id').inTable('resources')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
         table.integer('project_id')
            .unsigned().notNullable()
            .references('id').inTable('projects')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
      })
};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects')
      .dropTableIfExists('resources')
};
