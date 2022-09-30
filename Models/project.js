const dbcon = require('../helpers/datacon');
var mysql  = require('mysql');

var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'projects'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});

let projects = [];
let proj={
    title: "School Construction",
    contractor: "JS Holdings Limited",
    budget: 30000,
    status: "In-Progress",
    location: "Mandevu",
    areaCode: 230
}
let proj2={
    title: "Computer Lab Furnishing",
    contractor: "Asp Suppliers",
    budget: 65000,
    status: "In-Progress",
    location: "Evelyn Hone",
    areaCode: 231
}
projects.push(proj);
projects.push(proj2);

module.exports = class projectClass{
    constructor(tit,cont,budg,sta,loc,area){
        this.areaCode = area;
        this.budget = budg;
        this.contractor = cont;
        this.status = sta;
        this.location = loc;
        this.title = tit;
    }
    static async addProject(project){
        projects.push(project);
        
        await dbconn.connect(function(err) {
            if (err) throw err;
            console.log("Database connected successfully!");
          
           var sqlquery = `INSERT INTO projects (title,budget,contractor,status,location,areacode) values ('${project.title}', '${project.budget}', '${project.contractor}',''${project.status}','${project.location}','${project.areacode}')`;
           dbconn.query(sqlquery, function (err, result) {
             if (err) throw err;
                 console.log(result.affectedRows + " record inserted");
           });
         });
        return projects;
    }
    static getAllProjects(){
        return projects;
    }
    static getAreaProjects(code){
        return projects.filter(p=>p.areaCode==code);
    }
}


