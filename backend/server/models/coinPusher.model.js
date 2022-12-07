const mongoose = require('mongoose')

const CoinPusherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required for Coin Pusher (Should be usersnameCoinPusher"]
    },
    level: {
        type: Integer,
        required: [true, "Level is required (Default 0)"],
        default: 0
    },
    speed: {
        type: Float,
        required: [true, "Speed is required"],
        min: [100, "Must be at least 1/10 of a second"],
        default: 1000
    },
    output: {
        type: Integer,
        required: [true, "Output is required"],
        min: [1, "Output must be at least 1"],
        default: 5
    }
}, {timestamps: true})


const CoinPusher = mongoose.model("CoinPusher", CoinPusherSchema);

module.exports = CoinPusher;