import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	parent_id: String,
});

export default model('Categories', schema);