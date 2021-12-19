const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
  resId: {
    type: Number,
    required: true,
  },
  nameRes: {
    type: String,
    required: true,
  },
  phoneRes: {
    type: Number,
    required: true,
  },
  fullAdress: {
    type: String,
    required: true,
  },
  geometry: {
    type: { type: String, enum: ["Point"], required: true },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  dateRes: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  placeRes: {
    type: String,
    required: true,
  },
  numOfPeopleRes: {
    type: Number,
  },
  isApproved: {
    type: Boolean,
    required: true,
  },
});

const ReservationS = mongoose.model("ReservationS", ReservationSchema);
module.exports = ReservationS;
//  resId: 1233,
// nameRes: "amit",
// phoneRes: "0526789342",
// dateRes: "2021-11-30T20:23:00.000Z",
// placeRes: "netania",
// numOfPeopleRes: 20,
// isApproved: false,
