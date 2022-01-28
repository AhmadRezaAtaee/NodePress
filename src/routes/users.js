import { Router } from 'express';
import Users from '../models/users.js';

const router = Router();
const routePath = '/users';

router
	.route(routePath)

	.get(async (req, res) => {
		const allUsers = await Users.find({});
		res.send(allUsers);
	});

router
	.route(routePath + '/:id')

	.get(async (req, res) => {
		res.send('Get items');
	})

	.put(async (req, res) => {
		const user = Users.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.send(user);
	})

	.delete(async (req, res) => {
		const user = Users.findByIdAndDelete(req.params.id, { new: true });
		res.send(user);
	});

export default router;
