import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

const ImageDetail = () => {
	const { id } = useParams();
	const history = useHistory();
	const image = useFetch(`http://localhost:8000/images/${id}`);
	const { url, meta, description, date } = image;

	const handleDeleteClick = async id => {
		try {
			await axios.delete(`http://localhost:8000/images/${id}`);
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
					<p>{date}</p>
					<button className="btn btn-primary" onClick={() => handleDeleteClick(id)}>
						Delete Image
					</button>
				</div>
				<div>{description}</div>
			</div>
		</section>
	);
};

export default ImageDetail;
