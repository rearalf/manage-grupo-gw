import React, { Fragment } from 'react';
import { useNavBar } from '../hooks/useNavBar';
import { Navbar } from '../components/Navbar';
import { MessageWarning, Notification } from './Message';

export const AppLayout = ({ children, ClassName = '' }) => {
	const { toggle, setToggle } = useNavBar();
	return (
		<Fragment>
			<Navbar setToggle={setToggle} toggle={toggle} />
			<main className={`content ${toggle ? 'layout' : ''} ${ClassName}`} id="layout">
				{children}
			</main>
			<Notification />
			<MessageWarning />
		</Fragment>
	);
};
