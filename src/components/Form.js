import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = props => {
	return (
		<div className="form">
			<h2>{props.title}</h2>
			<form onSubmit={props.handleSubmit}>
				<label htmlFor="url">Image URL:</label>
				<input
					type="text"
					className="form-inputs"
					id="url"
					value={props.url}
					onChange={e => props.setURL(e.target.value)}
					required
				/>
				<label htmlFor="description">Image Description:</label>
				<textarea
					id="description"
					className="form-inputs"
					value={props.description}
					onChange={e => props.setDescription(e.target.value)}
					required
				></textarea>
				<label htmlFor="meta">Image Meta:</label>
				<input
					type="text"
					className="form-inputs"
					id="meta"
					value={props.meta}
					onChange={e => props.setMeta(e.target.value)}
					required
				/>
				<label htmlFor="date">Image Date:</label>
				<DatePicker
					className="form-inputs"
					id="date"
					onChange={props.setDate}
					selected={props.date}
					dateFormat="d MMMM yyyy"
					required
				/>
				<button className="btn btn-primary">{props.title}</button>
			</form>
		</div>
	);
};

export default Form;
