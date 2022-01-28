import { Router } from 'express';
const router = Router();
const routePath = '/posts';

router

	.post(routePath, (req, res) => {
		res.send('Created');
	})

	.get(routePath, (req, res) => {
		res.send('Get item');
	})

	.get(routePath + '/:id', (req, res) => {
		res.send('Get items');
	})

	.put(routePath + '/:id', (req, res) => {
		res.send('Updated');
	})

	.delete(routePath + '/:id', (req, res) => {
		res.send('Deleted');
	});

export default router;
