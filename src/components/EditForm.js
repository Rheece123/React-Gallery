import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Form from './Form';
import axios from 'axios';

const EditForm = () => {
	const title = 'Update Image';
	const [url, setURL] = useState('');
	const [description, setDescription] = useState('');
	const [meta, setMeta] = useState('');
	const [date, setDate] = useState(new Date());
	const history = useHistory();
	const { id } = useParams();

	useEffect(() => {
		const getImage = async () => {
			const res = await axios.get(`http://localhost:5000/images/${id}`);
			setURL(res.data.url);
			setDescription(res.data.description);
			setMeta(res.data.meta);
			// setDate(res.data.date)
		};

		getImage();
	}, [id]);

	const handleSubmit = async e => {
		e.preventDefault();

		const image = { url, description, meta, date };
		try {
			await axios.put(`http://localhost:5000/images/update/${id}`, image);
			history.push('/');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Form
			title={title}
			url={url}
			setURL={setURL}
			description={description}
			setDescription={setDescription}
			meta={meta}
			setMeta={setMeta}
			date={date}
			setDate={setDate}
			handleSubmit={handleSubmit}
		/>
	);
};

export default EditForm;
