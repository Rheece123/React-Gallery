const router = require('express').Router();
let Image = require('../models/image');

router.route('/').get(async (req, res) => {
	try {
		const image = await Image.find();
		res.json(image);
	} catch (err) {
		res.status(400).json(`Error: ${err}`);
	}
});

router.route('/:id').get(async (req, res) => {
	try {
		const image = await Image.findById(req.params.id);
		res.json(image);
	} catch (err) {
		res.status(400).json(`Error: ${err}`);
	}
});

router.route('/:id/').delete(async (req, res) => {
	try {
		await Image.findByIdAndDelete(req.params.id);
		res.json('Image deleted');
	} catch (err) {
		res.status(400).json(`Error: ${err}`);
	}
});

router.route('/add').post(async (req, res) => {
	const url = req.body.url;
	const description = req.body.description;
	const meta = req.body.meta;
	const date = Date.parse(req.body.date);

	const newImage = new Image({ url, description, meta, date });

	try {
		await newImage.save();
		res.json('New image added');
	} catch (err) {
		res.status(400).json(`Error: ${err}`);
	}
});

module.exports = router;
