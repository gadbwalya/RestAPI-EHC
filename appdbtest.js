const db =require('./helpers/dbTasks');
console.log(db);

let d = new db();

//console.log(d);

d.saveData(`INSERT into projects (areacode,budget,contractor,id,location,status,title) VALUES ('1187',1100,'DB Rest API Test 2',null,'Lusaka Ehc','Done','Title Testing Second')`)
d = new db();
d.getData('select * from projects');
//d = new db();  */

