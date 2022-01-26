import mongoose from "mongoose";
const { model, Schema } = mongoose

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    parent_id: Number
})

export default model('Users', schema)