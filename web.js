var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var characterRouter = require("./api/character/character.router");
var userRouter = require("./api/user/user.router");
var raidRouter = require("./api/raid-calendar/raid-calendar.router");
var raidV2Router = require("./api/raid-calendar-v2/raid-calendar-v2.router");
var loginRouter = require("./api/login/login.router");
var loginV2Router = require("./api/login-v2/login-v2.router");
var logoutRouter = require("./api/logout/logout.router");
var codeRouter = require("./api/code/code.router");
var jobOfferRouter = require("./api/job-offer/job-offer.router");
var jobOfferCommentRouter = require("./api/job-offer/comment/job-offer-comment.router");
const cors = require("cors");
var app = express();

var port = normalizePort(process.env.PORT || "3001");
app.set("port", port);
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
app.use("/login-v2", loginV2Router);
app.use("/logout", logoutRouter);
app.use("/code", codeRouter);
app.use("/raid-calendar-v2", raidV2Router);
app.use("/job-offer", jobOfferRouter);
app.use('/job-offer/comment',jobOfferCommentRouter);

// Swagger
const { swaggerUi, specs } = require("./swagger/swagger");
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

// 세션 구현
const session = require("express-session");
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

// 아래
var debug = require("debug")("server:server");
var http = require("http");
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

module.exports = app;
