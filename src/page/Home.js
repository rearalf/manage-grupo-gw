import React from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout';
import '../assets/styles/home.scss';

export const Home = () => {
	return (
		<AppLayout>
			<h1>Hello World</h1>
			<Link to="/about">About</Link>
		</AppLayout>
	);
};
