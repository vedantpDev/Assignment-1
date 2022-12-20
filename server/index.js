const express = require("express");
const PORT = 4000;
const app = express();
const cors = require("cors");
const conn = require("./db");
const auth = require("./middleware/auth");
const token = require("./route/token");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/login", token);

app.get("/get", auth, (req, res, next) => {
  let q = `select * from book`;
  conn.query(q, (err, data) => {
    if (err) return next(new Error(err));
    res.status(200).send({
      data: data,
    });
  });
});

app.post("/search", (req, res, next) => {
  if (!req.body) return next(new Error("Please Provide Data"));
  let q = `select * from book where name like '${req.body.searchValue}%' `;
  conn.query(q, (err, data) => {
    if (err) return next(new Error(err));
    res.status(200).send({
      data: data,
    });
  });
});

app.listen(PORT, console.log(`App running on ${PORT}`));
