const dbcon = require('./datacon');
module.exports = class dboperations{
    constructor(){
        this.conn = (new dbcon()).getConnection();
    }
    saveData(query){
        this.conn.connect((err) => {
            if (err) {
                return console.log(err.message);
            } else {
                this.conn.query(query, function(err, response) {
                    if (err) {
                        return console.log(err.message);
                    } else {
                        console.log('data added succsfully');
                    }
                });
            }
            // close the connection
            this.conn.end();
        });
        
           
    }
    getData(query){
        this.conn.connect((err) => {
            if (err) {
                return console.log(err.message);
            } else {
                this.conn.query(query, function(err, response, result) {
                    if (err) {
                        return console.log(err.message);
                    } else {
                        console.log(response);
                    }
                });
            }
            // close the connection
            this.conn.end();
        });

    }
}