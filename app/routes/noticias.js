
module.exports = function(app) {

    app.get('/noticias', (req, res)=>{
    // logica para pegar fazer consulta no bando de dados 
        
        // essa variavel faz conexao com o BD, a partir do app que foi passado como parametro podemos usar a dbConnection executa-lo
        let connection = app.config.dbConnection();
        let noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias((error, result) => {
            res.render("noticias/noticias", {noticias: result});
        });

        
});
};