const mongoose = require("mongoose");

// schema
const TaskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("task", TaskSchema);
