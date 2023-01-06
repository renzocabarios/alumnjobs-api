import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const schema = mongoose.Schema({
  message: {
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

export default mongoose.model(RESOURCE.JOBS, schema);
