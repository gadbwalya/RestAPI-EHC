const express = require('express');
const projectsController = require('../Controllers/projectController');
var app = express();
const path = require('path');
app.set('env','development');

const router = express.Router();

//app.use(express.static(path.join(__dirname, 'client')));
const cors = require('cors');
app.use(cors());
app.use(express.json());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
  })); 
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', projectsController.getProjects);
router.get('/area/:code', projectsController.getProjectsInArea);
router.post('/', projectsController.createProject);

module.exports = router;
