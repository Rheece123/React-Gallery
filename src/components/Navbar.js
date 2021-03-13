import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav id="navbar">
			<div className="container">
				<h1>John Doe</h1>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/add">Add Image</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
