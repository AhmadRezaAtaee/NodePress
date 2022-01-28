import mongoose from 'mongoose';
import Joi from 'joi';
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

const postCategoriesSchema = Joi.object({
	post_id: Joi.string().required(),
	category_id: Joi.string().required(),
});

export const postCategoriesValidation = (data) =>
	postCategoriesSchema.validateAsync(data);
