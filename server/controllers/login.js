const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await UserSchema.findOne({ username });
    if (!foundUser) {
      return res.json({ isAuth: false });
    } else {
      bcrypt.compare(password, foundUser.password, (err, response) => {
        if (response) {
          const id = foundUser._id;
          const token = jwt.sign({ id }, "secretkey", { expiresIn: 60*60 });
          req.session.user = foundUser;
          res.json({ isAuth: true, token: token });
        } else {
          res.json({ isAuth: false });
        }
      });
    }
  }