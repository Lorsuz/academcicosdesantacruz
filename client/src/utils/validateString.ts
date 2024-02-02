export class Validator {
	static isNotEmpty(value: string): boolean {
		return value.trim() !== '';
	}

	static hasNoSpaces(value: string): boolean {
		return !/\s/.test(value);
	}

	static containsOnlyLetters(value: string): boolean {
		return /^[a-zA-Z]+$/.test(value);
	}

	static containsOnlyNumbers(value: string): boolean {
		return /^[0-9]+$/.test(value);
	}

	static containsNoSpecialCharacters(value: string): boolean {
		return /^[a-zA-Z0-9]+$/.test(value);
	}

	static containsOnlyUppercaseLetters(value: string): boolean {
		return /^[A-Z]+$/.test(value);
	}

	static containsOnlyLowercaseLetters(value: string): boolean {
		return /^[a-z]+$/.test(value);
	}

	static containsNumbers(value: string): boolean {
		return /\d/.test(value);
	}

	static containsLetters(value: string): boolean {
		return /[a-zA-Z]/.test(value);
	}

	static contentIsEqual(value1: string, value2: string): boolean {
		return value1 === value2;
	}

	static hasMinLength(value: string, minLength: number): boolean {
		return value.length >= minLength;
	}

	static hasMaxLength(value: string, maxLength: number): boolean {
		return value.length <= maxLength;
	}
}
