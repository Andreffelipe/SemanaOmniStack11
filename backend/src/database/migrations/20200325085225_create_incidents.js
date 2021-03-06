
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
//npx knex migrate:make create_incidents
// cria uma nova migration
//npx knex migrate:latest
// comando para cria sa tabelas do banco de dados
// npx knex => exibe documentação do knex
