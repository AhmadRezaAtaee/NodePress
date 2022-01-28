import mongoose from 'mongoose';
import Joi from 'joi';
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

const infoSchema = Joi.object({
	name: Joi.string().required(),
	value: Joi.string(),
});

export const infoValidation = (data) => infoSchema.validateAsync(data);
