import React from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout';

export const About = () => {
	return (
		<AppLayout>
			<h1>About </h1>
			<Link to="/">Home</Link>
		</AppLayout>
	);
};
