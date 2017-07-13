const Task = require('../models/tasks');
const cronjob = require('../helpers/cronjob');
var model ={};

model.getAllTask = function(req, res){
    Task.find({}, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'Tidak dapat menemukan apapaun',
                error: err
            })
        } else {
            res.status(200)
            .send({
                message: 'Berhasil mendapatkan data',
                data: result
            })
        }
    })
}

model.getOneTask = function(req, res){
    let id = req.params.id
    Task.findById(id, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'Tidak dapat menemukan apapaun',
                error: err
            })
        } else {
            res.status(200)
            .send({
                message: 'Berhasil mendapatkan data',
                data: result
            })
        }
    })
}

model.createTask = function(req, res){
    let name = req.body.name,
        email = req.body.email,
        task = req.body.task,
        jobschedule = req.body.jobschedule;
    Task.create({
        name: name,
        email: email,
        task: task,
        jobschedule: jobschedule
    }, (err, result)=>{
         if(err){
            res.status(400)
            .send({
                message: 'Tidak dapat memasukkan apapaun',
                error: err
            })
        } else {
            res.status(200)
            .send({
                message: 'Berhasil memasukan data',
                data: result
            })
            cronjob(result)
        }
    })
}

model.deleteTask = function(req, res){
    let id = req.params.id;
    Task.findByIdAndRemove(id, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'Tidak dapat menghapus apapaun',
                error: err
            })
        } else {
            res.status(200)
            .send({
                message: 'Berhasil menghapus data',
                data: result
            })
        }
    })
}

module.exports = model;