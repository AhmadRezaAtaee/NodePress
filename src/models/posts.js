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

const postsSchema = Joi.object({
	title: Joi.string().required(),
	content: Joi.string(),
	author_id: Joi.string().required(),
	post_status: Joi.boolean(),
	comment_status: Joi.boolean(),
});

export const postsValidation = (data) => postsSchema.validateAsync(data);
