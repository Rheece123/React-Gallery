import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';
import Form from './components/Form';
import EditForm from './components/EditForm';
import './index.css';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ImageList} />
				<Route exact path="/add" component={Form} />
				<Route exact path="/update/:id" component={EditForm} />
				<Route exact path="/images/:id" component={ImageDetail} />
			</Switch>
		</Router>
	);
};

export default App;
