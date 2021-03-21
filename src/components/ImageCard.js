import { Link } from 'react-router-dom';

const ImageCard = ({ image }) => {
	const { _id, url, description, meta, date } = image;

	// Remove timestamp from MongoDB
	const formattedDate = date.split('T')[0];

	return (
		<article className="card">
			<img src={url} alt={meta} />
			<Link className="btn btn-primary" to={`/images/${_id}`}>
				Read More
			</Link>
			<p>{description.slice(0, 50)}...</p>
			<p>{formattedDate}</p>
		</article>
	);
};

export default ImageCard;
