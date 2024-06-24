export const validateLength = ( value: string, minLength: number, maxLength: number ): string =>
{
	const isBetween = value.hasRangeLength( minLength, maxLength );
	const response = isBetween ? '' : `O comprimento deve estar entre ${ minLength } e ${ maxLength } caracteres.`;
	return response;
};

export const validateEmail = ( email: string ): string =>
{
	const isValid = email.isValidEmail();
	const response = isValid ? '' : 'Digite um endereço de e-mail válido.';
	return response;
};

export const validateNoSpecialChars = ( value: string ): string =>
{
	const hasSpecialChars = value.hasNoSpecialCharacters();
	const response = !hasSpecialChars ? '' : 'Este campo não pode conter caracteres especiais.';
	return response;
};

export const validateNoLetters = ( value: string ): string =>
{
	const hasLetters = value.hasNoLetters();
	const isValid = !hasLetters ? '' : 'Este campo não pode conter letras.';
	return isValid;
};

export const validateNoNumbers = ( value: string ): string =>
{
	const hasNumbers = value.hasNoNumbers();
	const isValid = !hasNumbers ? '' : 'Este campo não pode conter números.';
	return isValid;
};
