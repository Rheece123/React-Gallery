import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';
import axios from 'axios';

const CreateForm = () => {
	const title = 'Add a New Image';
	const [url, setURL] = useState('');
	const [description, setDescription] = useState('');
	const [meta, setMeta] = useState('');
	const [date, setDate] = useState(new Date());
	const history = useHistory();

	const handleSubmit = async e => {
		e.preventDefault();

		const image = { url, description, meta, date };
		try {
			await axios.post('http://localhost:5000/images/add', image);
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

export default CreateForm;
