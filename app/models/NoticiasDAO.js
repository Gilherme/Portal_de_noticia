
function NoticiasDAO(connection){

  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
  this._connection.query('SELECT * FROM diario ORDER BY data_criacao DESC', callback);
}

NoticiasDAO.prototype.getNoticia  = function(id, callback) {
  this._connection.query('SELECT * FROM diario where id = ' + id.id, callback)
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
  this._connection.query('INSERT INTO diario set ? ', noticia, callback)
}

NoticiasDAO.prototype.get5ultimasNoticias = function(noticia, callback) {
  this._connection.query('SELECT * FROM diario ORDER BY data_criacao DESC LIMIT 5',noticia, callback);
}

module.exports = function() {
  return NoticiasDAO;
};