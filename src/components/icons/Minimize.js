import React from 'react';

const Minimize = ({ Title = 'Minimize', Fill = '#000', Width = 8, Height = 8 }) => (
	<svg
		className="svg"
		xmlns="http://www.w3.org/2000/svg"
		width={Width}
		height={Height}
		fill="none"
		viewBox="0 0 12 12">
		<title>{Title}</title>
		<path fill={Fill} d="M1.125 10.5h9.75v.75h-9.75v-.75z" />
	</svg>
);

export default Minimize;
