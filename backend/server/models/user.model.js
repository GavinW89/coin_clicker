const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    coins: {
        type: Number,
        required: [true, "Coins are requried"],
        default: 0
    },
    games: {

        coinPusher: {
            name: {
                type: String,
                required: [true, "Coin Pusher Needs A Name"],
                default: "Coin Pusher"
            },
            level: {
                type: Number,
                required: [true, "Coin Pusher Needs A Level"],
                default: 0,
                min: 0,
                max: 100
            },
            output: {
                type: Number,
                default: 0,
                min:0,
                max: 100
            },
            multiplier: {
                type: Number,
                default: 1,
                min: 1,
                max: 10
            }
        },
        randomGame: {
            name: {
                type: String,
                required: [true, "RANDOM"],
                default: "Random Game"
            }
        }
    }

}, { timestamps: true });

const User = mongoose.model("user", UserSchema)

module.exports = User;