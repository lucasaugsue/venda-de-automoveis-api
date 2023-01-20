
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('donos_anuncios').del()
    .then(function () {
      // Inserts seed entries
      return knex('donos_anuncios').insert([
        {id: 1, anuncios_id: 1, donos_id: 1},
        {id: 2, anuncios_id: 2, donos_id: 2},
        {id: 3, anuncios_id: 3, donos_id: 3},
      ]);
    });
};