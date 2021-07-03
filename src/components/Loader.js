import React from 'react';
import '../assets/styles/components/Loader.scss';

export const Loader = () => {
	return (
		<div className="loader">
			<div className="circle circle__one" />
			<div className="circle circle__two" />
			<div className="circle circle__three" />
			<div className="circle circle__four" />
			<div className="circle circle__five" />
		</div>
	);
};
