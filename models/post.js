console.log("models/post.js");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// var postSchema = new Schema({
//   date: { type: Date, default: Date.now },
//   type: { type: String, required: true },
//   name: { type: String, required: true },
//   duration: Number,
//   weight: Number,
//   reps: Number,
//   sets: Number
// });

var postSchema = new Schema({
    exersie: [{
    date: { type: Date, default: Date.now },
    type: { type: String, required: true },
    name: { type: String, required: true },
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
    }]
  });

var Post = mongoose.model("post", postSchema);

module.exports = Post;
