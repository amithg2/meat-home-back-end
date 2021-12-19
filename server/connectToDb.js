const mongoose = require("mongoose");
const DB_CONNECT = process.env.DB_CONNECT

  mongoose.connect(DB_CONNECT);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "conection error:"));
  db.once("open", () => {
    console.log("Database conected");
  });

