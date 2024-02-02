import { ToastOptions } from 'react-toastify';
type ToastNotificationConfig = {
	position: ToastOptions['position'];
	autoClose: ToastOptions['autoClose'];
	hideProgressBar: ToastOptions['hideProgressBar'];
	closeOnClick: ToastOptions['closeOnClick'];
	pauseOnHover: ToastOptions['pauseOnHover'];
	draggable: ToastOptions['draggable'];
	closeButton: ToastOptions['closeButton'];
};
export default {
	position: 'top-right',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	closeButton: true
} as ToastNotificationConfig;
