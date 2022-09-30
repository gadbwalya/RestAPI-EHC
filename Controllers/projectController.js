const { request } = require('express');
const res = require('express/lib/response');
const projectsModel = require('../Models/project');

exports.getProjects = async (req, res, next) =>{
    try{
        console.log('we want to to get all projects');
       // console.log(projectsModel.getAllProjects());
        res.json(await projectsModel.getAllProjects());
    }
    catch(err){
        throw err;
        console.log('an error occured');
    }
    finally{
        console.log('finally this was executed');
    }

}

exports.getProjectsInArea = async (req, res, next) =>{
    try{
        console.log('we want to to get all projects in area');
        // console.log(projectsModel.getAllProjects());
        let area = req.params.code;
        res.json(await projectsModel.getAreaProjects(area));
    }
    catch(err){
        throw err;
        console.log('an error occured');
    }
    finally{
        console.log('finally this was executed');
    }

}
exports.createProject = async (req, res, next) =>{
    try{
        console.log('we are adding a new project');
        let newproject={
            title: req.body.title,
            contractor: req.body.contractor,
            budget: req.body.budget,
            status: req.body.status,
            location: req.body.location,
            areaCode: req.body.areaCode
        }
        console.log(newproject);
        res.json(await projectsModel.addProject(newproject));
    }
    catch(err){
        throw err;
        console.log('an error occured');
    }
    finally{
        console.log('finally this was executed');
    }

}



