import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

const ImageList = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			const { data } = await axios.get('http://localhost:8000/images');
			setImages(data);
		};

		fetchImages();
	}, []);

	return (
		<section id="blog-articles">
			<div className="container">
				<div className="articles-container">
					{images.map(image => {
						return (
							<ImageCard
								key={image.id}
								id={image.id}
								url={image.url}
								description={image.description}
								meta={image.meta}
								date={image.date}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ImageList;
