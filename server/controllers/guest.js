const DataModel = require("../models/DataSchema");
const axios = require("axios");
const FB_CONNECT = process.env.FB_CONNECT;

module.exports.countEnter = async (req, res) => {
  try {
    await DataModel.findOneAndUpdate({ $inc: { enters: 1 } });
    return;
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.getFbImages = async (req, res) => {
  const fbImages = await axios.get(FB_CONNECT);
  return res.send(fbImages.data.posts);
};
