import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const schema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	author_id: {
		type: String,
		required: true,
	},
	data: {
		type: Date,
		default: Date.now,
	},
	post_status: {
		type: Boolean,
		default: true,
	},
	comment_status: {
		type: Boolean,
		default: true,
	},
});

export default model('Posts', schema);