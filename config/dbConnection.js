var mysql = require('mysql')

let connMysql = function(){
    // console.log('conexao com banco de dados ok!')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias',
    })
}
module.exports = function (){
    return connMysql;
  }



