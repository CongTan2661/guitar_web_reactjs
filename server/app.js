const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const { rootRouter } = require("./routers");
// const session = require("express-session");
var cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "passwd",
//   database: "qlwebguitar",
// });
const publicPathDirectory = path.join(__dirname, "/public");
app.use("/public", express.static(publicPathDirectory));
// app.use(
//   session({
//     secret: "guitarAD",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 1000 * 60 * 60 },
//   }),
// );
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v2", rootRouter);

app.listen(8082, () => {
  console.log("running port 8082");
});
