import useFetch from '../hooks/useFetch';
import ImageCard from './ImageCard';

const ImageList = () => {
	let imageList = useFetch('http://localhost:5000/images');

	if (imageList.length) {
		imageList = imageList.map(image => {
			return <ImageCard key={image._id} image={image} />;
		});
	} else {
		imageList = <h1>No Images to show</h1>;
	}

	return (
		<section id="blog-articles">
			<div className="container">
				<div className="articles-container">{imageList}</div>
			</div>
		</section>
	);
};

export default ImageList;
