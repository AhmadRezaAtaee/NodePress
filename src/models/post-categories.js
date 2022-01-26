import mongoose from "mongoose";
const { model, Schema } = mongoose

const schema = new Schema({
    post_id: {
        type: Number,
        required: true
    },
    category_id: {
        type: Number,
        required: true
    }
})

export default model('Users', schema)