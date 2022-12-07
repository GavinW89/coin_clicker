const userController = require("../controllers/user.controller")
const {authenticate} = require("../config/jwt")

module.exports = app => {
    app.get("/api/user/findone", userController.getUserByJWT)
    app.put("/api/user/setcoins", authenticate, userController.setCoins)
}
