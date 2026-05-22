const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, trim: true, required: true },
  description: { type: String, required: true },
  image: { type: String },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Post", postSchema);
