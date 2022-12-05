import express from "express";
import cors from "cors";
import users from "./routes/users";
import auth from "./routes/auth";
import assignProjects from "./routes/assignProjects";
import cookieParser from "cookie-parser";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// If there is an auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345'

// Middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
app.use(cookieParser());

app.use("/api", users);
app.use("/api", auth);
app.use("/api", assignProjects);

app.listen(port, () => {
  console.log(`Express.js: Listening on port https://localhost:${port}!`);
});
