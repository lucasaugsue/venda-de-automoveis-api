
exports.up = function (knex) {
    return knex.schema.createTable('donos_anuncios', function (t) {
        t.increments('id').notNullable()

        t.integer('anuncios_id').nullable().index().references('id').inTable('anuncios')
        t.integer('donos_id').nullable().index().references('id').inTable('donos')
    });
};

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTable('donos_anuncios')
    ])
};