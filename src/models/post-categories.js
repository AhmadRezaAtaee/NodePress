import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const schema = new Schema({
	post_id: {
		type: String,
		required: true,
	},
	category_id: {
		type: String,
		required: true,
	},
});

export default model('Post-Categories', schema);