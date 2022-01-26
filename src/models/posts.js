import mongoose from "mongoose";
const { model, Schema } = mongoose

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    author_id: {
        type: String,
        required: true,
        max: 500,
        min: 6,
    },
    data: {
        type: Date,
        default: Date.now
    },
    post_status: Boolean,
    comment_status: Boolean
})

export default model('Users', schema)