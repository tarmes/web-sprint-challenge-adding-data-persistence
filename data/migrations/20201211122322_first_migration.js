
exports.up = function(knex) {
   return knex.schema
      .createTable('resources', table => {
         table.increments('rsc_id')
         table.string('rsc_name', 128).notNullable()
         table.string('rsc_description', 128)
      })
      .createTable('projects', table => {
         table.increments('proj_id')
         table.string('proj_name', 128).notNullable()
         table.string('proj_description', 128)
         table.boolean('proj_completed').notNullable().defaultTo(false)
      })
      .createTable('tasks', table => {
         table.increments('task_id')
         table.string('task_description', 128).notNullable()
         table.string('notes', 128)
         table.boolean('task_completed').notNullable().defaultTo(false)
         table.integer('rsc_id')
            .unsigned().notNullable()
            .references('rsc_id').inTable('resources')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
         table.integer('proj_id')
            .unsigned().notNullable()
            .references('proj_id').inTable('projects')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
      })
};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects')
      .dropTableIfExists('resources')
};
