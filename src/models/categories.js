import mongoose from 'mongoose';
import Joi from 'joi';
const { model, Schema } = mongoose;

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	parent_id: String,
});

export default model('Categories', schema);

const categoriesSchema = Joi.object({
	name: Joi.string().required(),
	parent_id: Joi.string(),
});

export const categoriesValidation = (data) =>
	categoriesSchema.validateAsync(data);
