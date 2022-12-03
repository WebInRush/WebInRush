import express from "express";
import mysql from "mysql";
import cors from "cors";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "test",
});

// If there is an auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345'

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/books", (req, res) => {
//   const sql = "SELECT * FROM books";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.post("/books", (req, res) => {
//   const sql = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
//   const book = [[req.body.title, req.body.desc, req.body.cover]];
//   db.query(sql, book, (err, result) => {
//     if (err) throw err;
//     res.json("Book added");
//   });
// });

app.listen(port, () => {
  console.log(`Express.js: Listening on port https://localhost:${port}!`);
});
