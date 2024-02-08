import { logoutAction } from './actions/UserActions';

export const ErrorAction = (error: any, dispatch: any, action: any) => {
	const message = error.response && error.response.data.message ? error.response.data.message : error.message;
	if (message === 'Not authorized, token failed') {
		dispatch(logoutAction());
	}
	return dispatch({ type: action, payload: message });
};
