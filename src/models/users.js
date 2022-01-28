import mongoose from 'mongoose';
import Joi from 'joi';
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

const registerSchema = Joi.object({
	name: Joi.string().min(6),
	email: Joi.string().min(6).required().email(),
	password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
	email: Joi.string().min(6).required().email(),
	password: Joi.string().min(6).required(),
});

export const registerValidation = (data) => registerSchema.validateAsync(data);
export const loginValidation = (data) => loginSchema.validateAsync(data);
