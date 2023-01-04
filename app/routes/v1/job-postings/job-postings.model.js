import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const schema = mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model(RESOURCE.JOB_POSTINGS, schema);
