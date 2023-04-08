
function NoticiasDAO(connection){

  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
  this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
}

NoticiasDAO.prototype.getNoticia  = function(id_noticia, callback) {
  this._connection.query('SELECT * FROM noticias where id_noticia = ' + id_noticia.id_noticia, callback)
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
  this._connection.query('INSERT INTO noticias set ? ', noticia, callback)
}

NoticiasDAO.prototype.get5ultimasNoticias = function(noticia, callback) {
  this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5',noticia, callback);
}

module.exports = function() {
  return NoticiasDAO;
};