var mysql  = require('mysql');
module.exports = class connector{
    constructor(){
      this.dbconn = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'projectsdata'
       });

    }
    getConnection(){
        return this.dbconn;
    }
   
}
