import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../assets/styles/home.scss';

export const Home = () => {
	return (
		<div>
			<h1>Hello World</h1>
			<Link to="/about">About</Link>
		</div>
	);
};
