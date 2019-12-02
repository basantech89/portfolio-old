import React from 'react';
import '../assets/styles/components/_modal.scss';

const Modal = ({ handleClose, showModal, children }) => {
	if (showModal) {
		return (
			<form className="modal">
				<div>
					<div className="modal--header">
						<h1> Skills </h1>
					</div>
					<div className="modal--body">
						<p> Frontend: <input disabled className="progress" /> </p>
						<p> Backend: <input disabled className="progress" /> </p>
						<p> Linux: <input disabled className="progress" /> </p>
					</div>
				</div>
			</form>
		);
	} return <div />;

};

export default Modal;
