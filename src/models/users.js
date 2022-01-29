import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const schema = new Schema({
	name: String,
	email: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	password: {
		type: String,
		required: true,
		max: 500,
		min: 6,
	},
	role: {
		type: String,
		required: true,
	},
	data: {
		type: Date,
		default: Date.now,
	},
});

export default model('Users', schema);