export const formatCPF = (value: string): string => {
	let formattedValue = value.replace(/[^\d]/g, '');

	if (formattedValue.length > 9) {
		formattedValue = formattedValue.replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
	} else if (formattedValue.length > 6) {
		formattedValue = formattedValue.replace(/(\d{3})(\d{3})(\d)/, '$1.$2.$3');
	} else if (formattedValue.length > 3) {
		formattedValue = formattedValue.replace(/(\d{3})(\d)/, '$1.$2');
	}
	if (formattedValue.length > 14) {
		formattedValue = formattedValue.slice(0, 14);
	}

	return formattedValue;
};
export const formatDate = (value: string): string => {
	let formattedValue = value.replace(/[^\d]/g, '');

	if (formattedValue.length >= 9) {
		formattedValue = formattedValue.slice(0, 8);
		formattedValue = formattedValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
	} else if (formattedValue.length >= 5) {
		formattedValue = formattedValue.replace(/(\d{2})(\d{2})(\d)/, '$1/$2/$3');
	} else if (formattedValue.length >= 3) {
		formattedValue = formattedValue.replace(/(\d{2})(\d)/, '$1/$2');
	}

	return formattedValue;
};

export const formatPhoneNumber = (value: string): string => {
	let formattedValue = value.replace(/[^\d]/g, '');

	if (formattedValue.length >= 11) {
		formattedValue = formattedValue.slice(0, 11);
		formattedValue = formattedValue.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2.$3-$4');
	} else if (formattedValue.length >= 8) {
		formattedValue = formattedValue.replace(/(\d{2})(\d{1})(\d{4})(\d{1,4})/, '($1) $2.$3-$4');
	} else if (formattedValue.length >= 4) {
		formattedValue = formattedValue.replace(/(\d{2})(\d{1})(\d{1,4})/, '($1) $2.$3');
	} else if (formattedValue.length >= 3) {
		formattedValue = formattedValue.replace(/(\d{2})(\d{1})/, '($1) $2');
	}

	return formattedValue;
};

export const formatHeight = (value: string): string => {
	let formattedValue = value.replace(/[^\d.]/g, '');

	const decimalIndex = formattedValue.indexOf('.');
	if (decimalIndex !== -1) {
		const decimalPart = formattedValue.substring(decimalIndex + 1);
		formattedValue = formattedValue.substring(0, decimalIndex + 1) + decimalPart.slice(0, 2);
	}

	let height = parseFloat(formattedValue);

	if (height > 300) {
		height = 300;
	}

	formattedValue = height.toFixed(2);

	return formattedValue;
};

export const formatWeight = (value: string): string => {
	let formattedValue = value.replace(/[^\d.]/g, '');

	const decimalIndex = formattedValue.indexOf('.');
	if (decimalIndex !== -1) {
		const decimalPart = formattedValue.substring(decimalIndex + 1);
		formattedValue = formattedValue.substring(0, decimalIndex + 1) + decimalPart.slice(0, 2);
	}

	let weight = parseFloat(formattedValue);

	if (weight > 300) {
		weight = 300;
	}

	formattedValue = weight.toFixed(2);

	return formattedValue;
};

export const formatCEP = (value: string): string => {
	let formattedValue = value.replace(/[^\d]/g, '');

	if (formattedValue.length > 5) {
		formattedValue = formattedValue.replace(/(\d{2})(\d{3})(\d)/, '$1.$2-$3');
	} else if (formattedValue.length > 2) {
		formattedValue = formattedValue.replace(/(\d{2})(\d)/, '$1.$2');
	}

	if (formattedValue.length > 10) {
		formattedValue = formattedValue.slice(0, 10);
	}

	return formattedValue;
};

export const formatTimeForMinutesAndSeconds = (seconds: number): string => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.floor(seconds % 60);

	const formattedMinutes = String(minutes).padStart(2, '0');
	const formattedSeconds = String(remainingSeconds).padStart(2, '0');

	return `${formattedMinutes}:${formattedSeconds}`;
};

console.log('ariel'.isValidRangeLength(2,4));
