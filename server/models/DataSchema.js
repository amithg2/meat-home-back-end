const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  resIds: {
    type: [Number],
  },
  enters: {
    type: Number,
  }
});

const DataModel = mongoose.model("DataSchema", DataSchema);
module.exports = DataModel;
