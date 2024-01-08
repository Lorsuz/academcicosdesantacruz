export const validateLength = (value: string, minLength: number, maxLength: number): string => {
	const length = value.trim().length;
	const isBetween = length >= minLength && length <= maxLength;
	const response = isBetween ? '' : `O comprimento deve estar entre ${minLength} e ${maxLength} caracteres.`;
	return response;
};

export const validateEmail = (email: string): string => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const isValid = emailRegex.test(email);
	const response = isValid ? '' : 'Digite um endereço de e-mail válido.';
	return response;
};

export const validateNoSpecialChars = (value: string): string => {
	const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value);
	const response = !hasSpecialChars ? '' : 'Este campo não pode conter caracteres especiais.';
	return response;
};

export const validateNoLetters = (value: string): string => {
	const hasLetters = /[a-zA-Z]/.test(value);
	const isValid = !hasLetters ? '' : 'Este campo não pode conter letras.';
	return isValid;
};

export const validateNoNumbers = (value: string): string => {
	const hasNumbers = /\d/.test(value);
	const isValid = !hasNumbers ? '' : 'Este campo não pode conter números.';
	return isValid;
};
