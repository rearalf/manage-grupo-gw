import { useContext, useEffect, useState } from 'react';
import notificationContext from '../context/notificationContext';

export const useNotification = () => {
	const { notification, setNotification, setMessage } = useContext(notificationContext);
	const { isOpen, title, subTitle, type } = notification;
	const [ currentCount, setCount ] = useState(0);
	const changeValueIsOpen = () => {
		setNotification({
			isOpen: false,
		});
		setCount(0);
		setMessage({
			isOpenMessage: false,
			titleMessage: '',
			subTitleMessage: '',
		});
	};
	const timer = () => setCount(currentCount + 1);
	useEffect(
		() => {
			if (isOpen) {
				if (currentCount === 11) {
					changeValueIsOpen();
					return;
				}
				const id = setInterval(timer, 1000);
				return () => clearInterval(id);
			}
		},
		[ currentCount, isOpen ],
	);
	return {
		changeValueIsOpen,
		isOpen,
		title,
		subTitle,
		type,
		currentCount,
	};
};

export const useMessage = () => {
	const { message, setMessage } = useContext(notificationContext);
	const { isOpenMessage, titleMessage, subTitleMessage, onConfirm } = message;

	return {
		isOpenMessage,
		titleMessage,
		subTitleMessage,
		message,
		setMessage,
		onConfirm,
	};
};
