import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const schema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	value: String,
});

export default model('Info', schema);
