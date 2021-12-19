require("dotenv").config();
const ReservationS = require("../models/resrvationSchema");
const DataModel = require("../models/DataSchema");
const helpers = require("./controllerHelpes");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
console.log(MAPBOX_ACCESS_TOKEN, '***')
const mapBoxToken = MAPBOX_ACCESS_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

module.exports.add = async (req, res) => {
  const dataStats = await DataModel.findOne({});
  console.log(dataStats)
  const resId = await helpers.compareIds(dataStats);
  await DataModel.findOneAndUpdate({
    $push: { resIds: resId },
  });
  const geoData = await geocoder
    .forwardGeocode({
      query: req.body.placeRes,
      limit: 1,
    })
    .send();
  const geometryBackUp = { type: "point", coordinates: [0, 0] };
  const newReservation = new ReservationS({
    ...req.body,
    geometry: geoData.body.features[0].geometry || geometryBackUp,
    resId: resId,
    date: new Date(req.body.dateRes).valueOf(),
    fullAdress: " ",
    isApproved: false,
  });
  newReservation.phoneRes = parseInt(req.body.phoneRes);
  newReservation
    .save()
    .then((p) => {
      return res.json({ resId, success: true });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false });
    });
};

module.exports.edit = async (req, res) => {
  const geoData = await geocoder
    .forwardGeocode({
      query: req.body.placeRes,
      limit: 1,
    })
    .send();
  const editedRes = req.body;
  const { resId } = req.body;
  if (!geoData.body.features[0]) {
    return res.json({ success: false, message: "מקום לא נמצא" });
  }
  editedRes.geometry = geoData.body.features[0].geometry;
  editedRes.date = new Date(req.body.dateRes).valueOf();

  await ReservationS.findOneAndUpdate({ resId: resId }, editedRes).catch(
    (err) => {
      if (err) return res.json({ success: false, message: err.message });
    }
  );
  return res.json({ success: true, message: "נשמר בהצלחה" });
};

module.exports.delete = async (req, res) => {
  const { resId } = req.body;
  await DataModel.findOneAndUpdate({ $pull: { resIds: resId } });
  await ReservationS.findOneAndDelete({ resId: resId })
    .then((p) => {
      return res.json({ success: true, message: "נמחק בהצלחה" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false, message: "בעיה - לא נמחק" });
    });
};
