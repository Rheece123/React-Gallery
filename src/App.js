import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageList from './components/ImageList';
import ImageDetail from './components/ImageDetail';
import Form from './components/Form';
import './index.css';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<ImageList />
				</Route>
				<Route exact path="/add">
					<Form />
				</Route>
				<Route exact path="/images/:id">
					<ImageDetail />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
