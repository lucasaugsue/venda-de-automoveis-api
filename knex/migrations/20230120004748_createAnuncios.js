exports.up = function (knex) {
    return knex.schema.createTable('anuncios', function (t) {
        t.increments('id').notNullable()
        
        t.string('nome').notNullable()
        t.string('marca').notNullable()
        t.datetime('ano_de_fabricacao').notNullable()
        t.string('descricao').notNullable()
        
        t.datetime('created_at').notNullable().defaultTo(knex.raw('NOW()'))
        t.datetime('updated_at').notNullable().defaultTo(knex.raw('NOW()'))
    });
};

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTable('anuncios')
    ])
};