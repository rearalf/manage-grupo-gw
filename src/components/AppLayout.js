import React, { Fragment } from 'react';
import { useNavBar } from '../hooks/useNavBar';
import { Navbar } from '../components/Navbar';

export const AppLayout = ({ children }) => {
	const { toggle, setToggle } = useNavBar();
	return (
		<Fragment>
			<Navbar setToggle={setToggle} toggle={toggle} />
			<main className={`content ${toggle ? 'layout' : ''}`} id="layout">
				{children}
			</main>
		</Fragment>
	);
};
