import mongoose from 'mongoose';
import Joi from 'joi';
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

const commentsSchema = Joi.object({
	title: Joi.string().required(),
	content: Joi.string().required(),
	author_id: Joi.string().required(),
	parent_id: Joi.string(),
});

export const commentsValidation = (data) => commentsSchema.validateAsync(data);
