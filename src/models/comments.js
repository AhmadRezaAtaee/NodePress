import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const schema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	author_id: {
		type: String,
		required: true,
	},
	parent_id: String,
	data: {
		type: Date,
		default: Date.now,
	},
});

export default model('Comments', schema);