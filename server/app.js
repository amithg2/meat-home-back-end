// require("dotenv").config();
console.log(process.env)
const express = require("express");
const resrvationsRoutes = require("./routes/reservationsRoutes");
const guest = require("./routes/guest");
const admin = require("./routes/admin");
const login = require("./routes/login");
require("./connectToDb");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const SECRET = process.env.SECRET;
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "id",
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use("/reservation", resrvationsRoutes);
app.use("/guest", guest);
app.use("/admin", admin);
app.use("/login", login);

app.post("/createusers", async (req, res) => {
  const userObj = {
    username: "yossi",
    password: (await bcrypt.hash("a123456", 12)).toString(),
    email: "amitadi91@gmail.com",
  };

   new userSchema(userObj)
    .save()
    .then((p) => {
      console.log(p);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
