import React, { useState } from 'react';

const notificationContext = React.createContext({
	// Notification
	isOpen: false,
	title: '',
	subTitle: '',
	type: '',
	// Message
	isOpenMessage: false,
	titleMessage: '',
	subTitleMessage: '',
});

export function NotificationContext({ children }){
	const [ notification, setNotification ] = useState({
		isOpen: false,
		title: '',
		subTitle: '',
	});
	const [ message, setMessage ] = useState({
		isOpenMessage: false,
		titleMessage: '',
		subTitleMessage: '',
	});
	return (
		<notificationContext.Provider
			value={{ notification, setNotification, message, setMessage }}>
			{children}
		</notificationContext.Provider>
	);
}

export default notificationContext;
