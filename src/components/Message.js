import React from 'react';
import { FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi';
import { useMessage, useNotification } from '../hooks/useNotification';
import '../assets/styles/components/Message.scss';

export const MessageWarning = () => {
	const {
		isOpenMessage,
		titleMessage,
		subTitleMessage,
		message,
		setMessage,
		onConfirm,
	} = useMessage();
	return (
		<div className={`${isOpenMessage ? 'layout__message' : ''}`}>
			<div className={`message__content ${isOpenMessage ? 'show' : ''}`}>
				<div className="message warning__message">
					<i>
						<FiAlertTriangle size={40} title={titleMessage} color={'E8A028'} />
					</i>
					<h2 className="message__title">{titleMessage}</h2>
					<p className="message__subtitle">{subTitleMessage}</p>
					<div className="btn__group">
						<button
							className="btn btn__primary"
							onClick={() => setMessage({ ...message, isOpenMessage: false })}>
							No
						</button>
						<button className="btn btn__secondary" onClick={onConfirm}>
							Sí
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Notification = () => {
	const { changeValueIsOpen, isOpen, title, subTitle, type, currentCount } = useNotification();
	return (
		<div className={`notification ${isOpen ? 'show__notification' : ''} ${type ? type : ''}`}>
			<div className={`notification__bar`} />
			<i className={`notification__icon`}>
				{type === 'success' ? (
					<FiCheckCircle color={'3BC279'} title={title} size={30} />
				) : type === 'error' ? (
					<FiAlertCircle color={'E9594C'} title={title} size={30} />
				) : type === 'warning' ? (
					<FiAlertTriangle color={'E8A029'} title={title} size={30} />
				) : (
					type === 'information' && <FiInfo color={'3f84e5'} title={title} size={30} />
				)}
			</i>
			<div className="notification__content">
				<h2 className="notification__title">{title}</h2>
				<p className="notification__subTitle">{subTitle}</p>
			</div>
			<i className={`notification__icon close__icon`} onClick={changeValueIsOpen}>
				<FiX title={'Cerrar'} size={20} />
			</i>
			<div
				className="loader__bar__notification"
				style={{
					width: `${currentCount}0%`,
				}}
			/>
		</div>
	);
};
