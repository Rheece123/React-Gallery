import { useParams, useHistory, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

const ImageDetail = () => {
	const { id } = useParams();
	const history = useHistory();
	const image = useFetch(`http://localhost:5000/images/${id}`);
	const { url, meta, description, date } = image;

	// Remove timestamp from MongoDB
	const formattedDate = date ? date.split('T')[0] : '';

	const handleDeleteClick = async id => {
		try {
			await axios.delete(`http://localhost:5000/images/${id}`);
			history.push('/');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section id="article">
			<div className="container">
				<div>
					<img src={url} alt={meta} />
				</div>
				<div className="meta-info">
					<p>{formattedDate}</p>
					<Link to={`/update/${id}`} className="btn btn-success">
						Edit Image
					</Link>

					<button className="btn btn-danger" onClick={() => handleDeleteClick(id)}>
						Delete Image
					</button>
				</div>
				<div>{description}</div>
			</div>
		</section>
	);
};

export default ImageDetail;
