import useFetch from '../hooks/useFetch';
import ImageCard from './ImageCard';

const ImageList = () => {
	const images = useFetch('http://localhost:5000/images');

	return (
		<section id="blog-articles">
			<div className="container">
				<div className="articles-container">
					{images.map(image => {
						return <ImageCard key={image._id} image={image} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default ImageList;
