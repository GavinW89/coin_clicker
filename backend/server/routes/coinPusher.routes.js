const coinPusherController = require("../controllers/coinPusher.controller")

module.exports = app => {
    app.get("/api/coinpusher/findAll", coinPusherController.findAll);
}