const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema(
	{
		url: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		meta: {
			type: String,
			required: true,
			trim: true,
		},
		date: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
