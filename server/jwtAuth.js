const jwt = require("jsonwebtoken");

module.exports.jwtAuth = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.json({ isAuth: false });
  } else {
    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        return res.json({ isAuth: false });
      } else {
        req.id = decoded.id;
        next();
      }
    });
  }
};
