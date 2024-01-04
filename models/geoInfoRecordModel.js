const mongoose = require("mongoose");

const geoInfoRecordsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
      unique: true
    },
  },
  { strict: false, timestamps: true }
);

const GeoInfoRecord = mongoose.model("geoInfoRecord", geoInfoRecordsSchema, "geoInfoRecords");

module.exports = GeoInfoRecord;
