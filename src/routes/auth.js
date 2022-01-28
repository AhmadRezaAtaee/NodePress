import { Router } from 'express';
import Users from '../models/users.js';
import { registerValidation, loginValidation } from '../validations/auth.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
const { sign } = jwt;

const { genSalt, hash, compare } = bcryptjs;
const router = Router();

router

	.post('/register', async (req, res) => {
		try {
			const data = await registerValidation(req.body);
			if (await Users.findOne({ email: data.email }))
				return res.status(400).send({ message: 'User exist!' });
			const salt = await genSalt(10);
			const hashedPass = await hash(data.password, salt);
			data.password = hashedPass;
			const user = await Users.create(data);
			res.send(user);
		} catch (error) {
			if (error.name === 'ValidationError') {
				const { message, context } = error.details[0];
				res.status(400).send({ message, context });
			}
			res.status(500).send({ message: 'Server Error!' });
			console.log(error);
		}
	})

	.post('/login', async (req, res) => {
		try {
			const data = await loginValidation(req.body);
			const user = await Users.findOne({ email: data.email });
			if (!(user && (await compare(data.password, user.password))))
				return res
					.status(400)
					.send({ message: 'email or password is wrong!' });
			const token = sign({ _id: data._id }, process.env.TOKEN_SECRET, {
				expiresIn: '7 days',
			});
			res.header('auth-token', token);
			res.send(token);
		} catch (error) {
			if (error.name === 'ValidationError') {
				const { message, context } = error.details[0];
				res.status(400).send({ message, context });
			}
			res.status(500).send({ message: 'Server Error!' });
			console.log(error);
		}
	});

export default router;
