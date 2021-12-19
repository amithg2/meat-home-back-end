const mongoose = require("mongoose");
const ReservationS = require("../models/resrvationSchema");

mongoose.connect("mongodb://localhost:27017/meatHome");

const db = mongoose.connection; //running the db
db.on("error", console.error.bind(console, "conection error:"));
db.once("open", () => {
  console.log("Database conected");
});

// const reservations = new ReservationS(
//   {
//     resId: 1832,
//     nameRes: "yeshaihu",
//     phoneRes: "0562323453",
//     dateRes: "2021-11-10T20:23:00.000Z",
//     placeRes: "netania",
//     numOfPeopleRes: 10,
//     isApproved: true,
//   },
//   {
//     resId: 1111,
//     nameRes: "yeshaihu",
//     phoneRes: "0562323453",
//     dateRes: "2021-12-30T20:23:00.000Z",
//     placeRes: "netania",
//     numOfPeopleRes: 10,
//     isApproved: true,
//   },
// );

// const reservations = new ReservationS({
//   resId: 1233,
//   nameRes: "amit",
//   phoneRes: "0526789342",
//   dateRes: "2021-11-30T20:23:00.000Z",
//   placeRes: "netania",
//   numOfPeopleRes: 20,
//   isApproved: false,
// });

reservations
  .save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });
