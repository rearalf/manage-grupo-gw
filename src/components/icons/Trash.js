import React from 'react';

const Trash = ({ Title = 'Delete', Fill = '#BE3323', Width = 20, Height = 20 }) => {
	return (
		<svg
			className="svg"
			width={Width}
			height={Height}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<title>{Title}</title>
			<path
				d="M19.1667 3.6H15.8333V1.6C15.8333 0.7175 15.0859 0 14.1667 0H5.83333C4.91406 0 4.16667 0.7175 4.16667 1.6V3.6H0.833333C0.372396 3.6 0 3.9575 0 4.4V5.2C0 5.31 0.09375 5.4 0.208333 5.4H1.78125L2.42448 18.475C2.46615 19.3275 3.20052 20 4.08854 20H15.9115C16.8021 20 17.5339 19.33 17.5755 18.475L18.2187 5.4H19.7917C19.9062 5.4 20 5.31 20 5.2V4.4C20 3.9575 19.6276 3.6 19.1667 3.6ZM13.9583 3.6H6.04167V1.8H13.9583V3.6Z"
				fill={Fill}
			/>
		</svg>
	);
};

export default Trash;
