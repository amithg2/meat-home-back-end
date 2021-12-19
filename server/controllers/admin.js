const DataModel = require("../models/DataSchema");
const ReservationS = require("../models/resrvationSchema");

module.exports.getAdminData = async (req, res) => {
  try {
    const data = await ReservationS.find({});
    const statistics = await DataModel.find({});
    res.json({ data, statistics, isAuth: true });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
