import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const ImageDetail = () => {
	const [image, setImage] = useState([]);
	const { id } = useParams();
	const history = useHistory();
	const { url, meta, description, date } = image;

	useEffect(() => {
		const fetchImage = async () => {
			const { data } = await axios.get(`http://localhost:8000/images/${id}`);
			setImage(data);
		};

		fetchImage();
	}, [id]);

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
