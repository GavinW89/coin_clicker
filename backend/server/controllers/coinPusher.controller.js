const coinPusher = require('../models/coinPusher.model');

module.exports.allCoinPushers = (req, res) => {
    coinPusher.find()
        .then(pusher => res.json(pusher))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.createCoinPusher = (req,res) => {
    coinPusher.create(req.body)
    .then(newPusher => res.json(newPusher))
    .catch((err) => res.json ({ messgae: 'Something went werong'}));
};

module.exports.updatePusher = (req,res) => {
    coinPusher.updateOne({_id: req.params._id}, req.body)
        .then(updatePusher => res.json(updatePusher))
        .catch(err => res.statyus(400).json({ message: 'Something went wrong', error: err}));
};

module.exports.deletePusher = (req, res) => {
    coinPusher.deleteOne({_id: req.params._id})
        .then(result => res.json({result}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findPusher = (req,res) => {
    coinPusher.findOne({_id: req.params._id})
        .then(onePusher => res.json({ onePusher }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}))
};