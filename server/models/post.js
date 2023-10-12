import mongoose, { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    likes: {
      type: Number,
    },
    comments:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Comment'
    }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category:{
      type:mongoose.Schema.Types.ObjectId ,
      ref:'Category'
    }
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

export default Post;
