
exports.up = function (knex) {
    return knex.schema.createTable('donos', function (t) {
        t.increments('id').notNullable()
        
        t.string('nome').notNullable()
        t.string('email').notNullable()
        t.string('telefone').notNullable()
        
        t.datetime('created_at').notNullable().defaultTo(knex.raw('NOW()'))
        t.datetime('updated_at').notNullable().defaultTo(knex.raw('NOW()'))
    });
};

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTable('donos')
    ])
};