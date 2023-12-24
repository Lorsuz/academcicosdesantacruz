export const validateLength = (value: string, minLength: number, maxLength: number): boolean | string => {
	const length = value.trim().length;
	return (
		(length >= minLength && length <= maxLength) ||
		`O comprimento deve estar entre ${minLength} e ${maxLength} caracteres.`
	);
};

export const validateEmail = (email: string): boolean | string => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email) || 'Digite um endereço de e-mail válido.';
};

export const validateNoSpecialChars = (value: string): boolean | string => {
	const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value);
	return !hasSpecialChars || 'Este campo não pode conter caracteres especiais.';
};

export const validateNoLetters = (value: string): boolean | string => {
	const hasLetters = /[a-zA-Z]/.test(value);
	return !hasLetters || 'Este campo não pode conter letras.';
};

export const validateNoNumbers = (value: string): boolean | string => {
	const hasNumbers = /\d/.test(value);
	return !hasNumbers || 'Este campo não pode conter números.';
};

export const validateNotEmpty = (value: string): boolean | string =>
	value.trim() !== '' || 'Este campo não pode estar vazio.';
