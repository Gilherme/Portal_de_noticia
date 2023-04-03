module.exports = function(app){

  app.get('/noticia', function(req,res){

      let connection = app.config.dbConnection();
      let noticiasModel = new app.app.models.NoticiasDAO(connection);

      noticiasModel.getNoticia((error, result) => {
          res.render('noticias/noticia', { noticia : result });
      });

  });
}