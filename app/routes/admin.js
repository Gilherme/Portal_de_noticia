module.exports = (app)=>{

app.get('/add_noticia', (req, res)=>{
    app.app.controllers.admin.add_noticia(app, req, res)
  });

app.post('/noticias/salvar', (req, res)=>{
    app.app.controllers.admin.salvar_noticia(app, req, res)
});

}