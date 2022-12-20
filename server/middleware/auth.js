const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authToken = req.header("auth-token");
  if (!authToken)
    return res.status(400).send({
      message: "Token Not Found",
    });

  try {
    const verify = jwt.verify(authToken, "jwtPrivateKey");
    req.user = verify;
  } catch (error) {
    return res.status(400).send({
      status: "Unauthorized",
      message: "Token has expired",
    });
  }
  next();
};
