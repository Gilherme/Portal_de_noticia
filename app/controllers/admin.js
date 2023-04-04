module.exports.add_noticia = function(app, req, res){
  res.render("admin/form_add_noticia", {validacao: {}, noticia: {}}); // sem passar a validação ele da erro no carregamento da pagina
  
}

module.exports.salvar_noticia = function(app, req, res){
  let noticia = req.body
  // Usando express-validator par validar campos de input o primeiro parametro é o name do input e o segundo é uma mensagem de erro
  // é o notEmpty que n nega o campo vazio
  req.assert('autor', 'O titulo é obrigatorio').notEmpty()
  req.assert('autor', 'O Nome do autor deve ter de 10 a 50 caracteres').len(10, 50)  // len é lenght a quantidade de caracteres (min, max)

  req.assert('resumo', 'O resumo é obrigatório').notEmpty()
  req.assert('resumo', 'O resumo deve ter de 10 a 100 caracteres').len(10, 100) 

  req.assert('data_noticia', 'A data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'}) // o isDate n permite que emput outro tipo de dado a n ser a data

  req.assert('noticia', 'A noticia é obrigatório').notEmpty()

  // se der erros eles ficam dentro da req no validationErrors(), então podemos tratá-los
  let erros = req.validationErrors();
  console.log(erros)
  if(erros){
      res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia}) // o segundo param é para recuperar os campos para assim preenche-los em caso de erro
      return;
  }

  let connection    = app.config.dbConnection();
  let noticiasModel = new app.app.models.NoticiasDAO(connection);

  noticiasModel.salvarNoticia(noticia,(error, result) => {
      res.redirect('/noticias');
  });
}