import axios from 'axios';

const loginService = async (user: any) => {
	const { data } = await axios.post('http://localhost:3001/login', user);
	if (data) {
		localStorage.setItem('userInfo', JSON.stringify(data));
	}
	return data;
};

const logoutService = () => {
	localStorage.removeItem('userInfo');
	return null;
};

export { loginService, logoutService };
