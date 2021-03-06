module.exports = function(app) {
   
   var controller = app.controllers.contato;   
   
   //app.get('/contatos', controller.listaContatos);
   app.route('/contatos')
      .get(controller.listaContatos)
      .post(controller.salvaContato);
   
   //app.get('/contatos/:id', controller.obtemContato);
   //app.delete('/contatos/:id', controller.removeContato);
   app.route('/ajuda')
      .get(controller.listaTopicos);

   app.route('/contatos/:id')
      .get(controller.obtemContato)
      .delete(controller.removeContato);
};