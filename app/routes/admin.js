module.exports = (app)=>{

app.get('/add_noticia', (req, res)=>{
    res.render("admin/form_add_noticia");
});


app.post('/noticias/salvar', (req, res)=>{

    let noticia = req.body

    // connection
    let connection    = app.config.dbConnection();
    let noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia,(error, result) => {
        res.redirect('/noticias');
    });
});

};