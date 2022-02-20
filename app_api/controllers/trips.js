const mongoose = require('mongoose');
const modle = mongoose.model('trips');

// get trips -listing all trips out their
const tripsList = async(req, res) =>{
    modle
        .find({}) // empty filter for all
        .exec((err,trips) => {
            if (!trips){
                return res
                .status(404)
                .json({"message":"trip not found"});
            } else if (err){
            return res
            .status(404)
            .json(err);
            } else {
                return res
                .status(200)
                .json(trips);
            }

        });
}

const tripsFindCode = async(req, res) =>{
    modle
        .find({'code':req.params.tripCode}) // empty filter for all
        .exec((err,trips) => {
            if (!trips){
                return res
                .status(404)
                .json({"message":"trip not found"});
            } else if (err){
            return res
            .status(404)
            .json(err);
            } else {
                return res
                .status(200)
                .json(trips);
            }

        });
}

module.exports = {
    tripsList,
    tripsFindCode
};