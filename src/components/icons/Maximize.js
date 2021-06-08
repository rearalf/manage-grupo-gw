import React from 'react';

const Maximize = ({ Title = 'Maximize', Fill = '#000', Width = 8, Height = 8 }) => (
	<svg
		className="svg"
		xmlns="http://www.w3.org/2000/svg"
		width={Width}
		height={Height}
		fill="none"
		viewBox="0 0 10 10">
		<title>{Title}</title>
		<path
			fill={Fill}
			d="M.8 2.15A1.35 1.35 0 012.15.8h5.7A1.35 1.35 0 019.2 2.15v5.7A1.35 1.35 0 017.85 9.2h-5.7A1.35 1.35 0 01.8 7.85v-5.7zm1.35-.45a.45.45 0 00-.45.45v5.7c0 .248.202.45.45.45h5.7a.45.45 0 00.45-.45v-5.7a.45.45 0 00-.45-.45h-5.7z"
		/>
	</svg>
);

export default Maximize;
