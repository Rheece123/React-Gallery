import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
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
		<div className="create">
			<h2>Update Image</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="url">Image URL:</label>
				<input
					type="text"
					className="form-inputs"
					id="url"
					value={url}
					onChange={e => setURL(e.target.value)}
					required
				/>
				<label htmlFor="description">Image Description:</label>
				<textarea
					id="description"
					className="form-inputs"
					value={description}
					onChange={e => setDescription(e.target.value)}
					required
				></textarea>
				<label htmlFor="meta">Image Meta:</label>
				<input
					type="text"
					className="form-inputs"
					id="meta"
					value={meta}
					onChange={e => setMeta(e.target.value)}
					required
				/>
				<label htmlFor="date">Image Date:</label>
				<DatePicker
					className="form-inputs"
					id="date"
					onChange={setDate}
					selected={date}
					dateFormat="d MMMM yyyy"
					required
				/>
				<button className="btn btn-primary">Update Image</button>
			</form>
		</div>
	);
};

export default Form;
