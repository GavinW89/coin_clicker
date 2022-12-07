require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:3000' ,preflightContinue: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",credentials:true
}));
app.use(cookieParser());
app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/user.routes")(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"))