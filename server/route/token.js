const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const conn = require("../db");

const router = express.Router();

router.post("/", (req, res) => {
  let q = `select email , password from jwt where email = '${req.body.email}'`;
  conn.query(q, (err, data) => {
    let user = data.find((u) => u.email == req.body.email);
    if (!user) throw new Error("Invalid Email");

    let checkpass = bcrypt.compareSync(req.body.password, user.password);
    if (!checkpass) throw new Error("Invalid Password");

    const tkn = jwt.sign(
      {
        id: data.id,
        email: data.email,
      },
      "jwtPrivateKey",
      { expiresIn: "15m" }
    );

    res.status(200).send({
      message: "Success",
      data: data,
      token: tkn,
    });
  });
});

module.exports = router;
