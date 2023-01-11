import mysql from "mysql";
require("dotenv").config();

const db_password = process.env.DB_PASSWORD || "12345";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: db_password,
  database: "webinrush",
});
