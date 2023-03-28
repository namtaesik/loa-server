var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var characterRouter = require("./api/character/character.router");
var userRouter = require("./api/user/user.router");
var raidRouter = require("./api/raid-calendar/raid-calendar.router");
var loginRouter = require("./api/login/login.router");
var codeRouter = require("./api/code/code.router");
console.log("app do1!");
const cors = require("cors");
var app = express();
app.set("port", "8001");
console.log("app do2!");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", characterRouter);
app.use("/character", characterRouter);
app.use("/user", userRouter);
app.use("/raid-calendar", raidRouter);
app.use("/login", loginRouter);
app.use("/code", codeRouter);

// Swagger
const { swaggerUi, specs } = require("./swagger/swagger");
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
