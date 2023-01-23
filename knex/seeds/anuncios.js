
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex('donos_anuncios').del()
    
  ).then(() => {
    knex('anuncios').del()
      .then(function () {
        // Inserts seed entries
        return knex('anuncios').insert([
          {id: 1, nome: 'New LXL 1.8 16V (Flex)', marca: 'Honda', ano_de_fabricacao: '2009-01-21 04:10:13', descricao: '-'},
          {id: 2, nome: 'New LXL 1.8 16V (Couro) (Aut) (Flex)', marca: 'Honda', ano_de_fabricacao: '2016-12-03 04:10:13', descricao: '-'},
          {id: 3, nome: 'rowVNew Si 2.0 16Value1', marca: 'Honda', ano_de_fabricacao: '2020-08-29 04:10:13', descricao: '-'},
        ]);
      });
  })
};