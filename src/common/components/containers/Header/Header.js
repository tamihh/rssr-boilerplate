import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {

	return (
		<div>
			<Link to="/">Agile English</Link>
			<div>
				<Link to="/home">Home</Link>
			</div>
		</div>
	);
};


export default Header;