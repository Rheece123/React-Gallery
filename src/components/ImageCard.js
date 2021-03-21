import { Link } from 'react-router-dom';

const ImageCard = ({ id, url, description, meta, date }) => {
	return (
		<article className="card">
			<img src={url} alt={meta} />
			<Link className="btn btn-primary" to={`/images/${id}`}>
				Read More
			</Link>
			<p>{description.slice(0, 50)}...</p>
			<p>{date}</p>
		</article>
	);
};

export default ImageCard;
