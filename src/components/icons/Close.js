import React from 'react';

const Close = ({ Title = 'Close', Fill = '#000', Width = 8, Height = 8 }) => (
	<svg
		className="svg"
		xmlns="http://www.w3.org/2000/svg"
		width={Width}
		height={Height}
		fill="none"
		viewBox="0 0 8 8">
		<title>{Title}</title>
		<path
			fill={Fill}
			d="M4.322 3.82L7.398.154A.093.093 0 007.327 0H6.39a.19.19 0 00-.144.067L3.71 3.09 1.173.067A.187.187 0 001.03 0H.094a.093.093 0 00-.072.154L3.1 3.82.022 7.487a.093.093 0 00.072.154h.935a.19.19 0 00.144-.067L3.71 4.549l2.537 3.025a.187.187 0 00.144.067h.936c.08 0 .123-.093.071-.154L4.322 3.82z"
		/>
	</svg>
);

export default Close;
