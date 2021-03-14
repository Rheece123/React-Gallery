import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = url => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			const { data } = await axios.get(url);
			setImages(data);
		};

		fetchImages();
	}, [url]);

	return images;
};

export default useFetch;
