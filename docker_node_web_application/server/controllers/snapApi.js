const mongoose = require("mongoose");
const Snap = require("../models/snap");
const snaps = [{"id" : 0, "title" : "First Snap", "path" : "First Path"}, {"id" : 1, "title" : "Second Snap", "path" : "Second Path"}];

const indexSnaps = (req, res, next) => {
    Snap
        .find()
        .exec((error, snaps) => {
            if(error){
                res
                    .status(400)
                    .json(error);
            }else{
                res
                    .status(200)
                    .json(snaps)
            }
        })
        ;        
};

const addSnap = (req, res) => {
    // modelName.create(dataToSave, callback)
    Snap
        .create({
                title: req.body.title,
                description : req.body.description,
                path : req.body.path,
                location : req.body.location
            }, 
            (error, snap) => {
                if(error){
                    res
                        .status(400)
                        .json(error);
                }else{
                    res
                        .status(201)
                        .json(snap)
                }
        });
};
const editSnap = (req, res) => {};
const findSnap = (req, res) => {
    Snap
        .findById(req.params.snapId)
        .exec((error, snap) => {
            if(!snap){
                return res
                    .status(404)
                    .json({"message" : "Snap not found"});
            }else if(error){
                return res
                        .status(404)
                        .json(error)
            }
            return res
                    .status(200)
                    .json(snap);
        })
        ;
};
const deleteSnap = (req, res) => {};

module.exports = {indexSnaps, addSnap, editSnap, findSnap, deleteSnap};