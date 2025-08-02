import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    tags: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        default: "",
    },
    likes: {
        type: [Schema.Types.ObjectId],
        ref: "user",
        default: [],
    },
},{timestamps: true})

export const Blog = mongoose.model("blog", blogSchema);
