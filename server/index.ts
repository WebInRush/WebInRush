import express from "express";
import mysql from "mysql";
const app = express();
const port = 8800 || process.env.PORT;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "test",
});

// If there is an auth problem 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345'

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.listen(port, () => {
  console.log(`Express.js: Listening on port ${port}!`);
});
