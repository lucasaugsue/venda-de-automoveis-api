
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('donos').del()
    .then(function () {
      // Inserts seed entries
      return knex('donos').insert([
        {id: 1, nome: 'Lucas Augsuê', email: 'lucasaugsue7@gmail.com', telefone: '(61)98114-6060'},
        {id: 2, nome: 'Glauber', email: 'glauber@gmail.com', telefone: '(61)98451-8462'},
        {id: 3, nome: 'Victória', email: 'victoria@gmail.com', telefone: '(61)98484-5151'},
      ]);
    });
};
