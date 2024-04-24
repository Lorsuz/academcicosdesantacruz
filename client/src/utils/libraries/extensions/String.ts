// #region Interface
declare global
{
	interface String
	{
		capitalize ( this: string ): string;

		isValidRangeLength ( minLength: number, maxLength: number, error?: string ): boolean | string;
		isValidEmail ( this: string, error?: string ): boolean | string;
		isNotEmpty ( this: string, error?: string ): boolean | string;
		isEqual ( valueToCompare: string, error?: string ): boolean | string;

		hasMaxLength ( maxLength: number, error?: string ): boolean | string;
		hasMinLength ( minLength: number, error?: string ): boolean | string;

		hasNoSpecialCharacters ( this: string, error?: string ): boolean | string;
		hasNoLetters ( this: string, error?: string ): boolean | string;
		hasNoNumbers ( this: string, error?: string ): boolean | string;
		hasNoSpaces ( this: string, error?: string ): boolean | string;

		hasOnlyLetters ( this: string, error?: string ): boolean | string;
		hasOnlyNumbers ( this: string, error?: string ): boolean | string;
		hasOnlyUppercaseLetters ( this: string, error?: string ): boolean | string;
		hasOnlyLowercaseLetters ( this: string, error?: string ): boolean | string;

		hasNumbers ( this: string, error?: string ): boolean | string;
		hasLetters ( error?: string ): boolean | string;
		hasSpecialCharacters ( this: string, error?: string ): boolean | string;
	}

}

// #region Returns
const handleConditionalError = ( conditional: boolean, error: string ) =>
{
	return conditional
		? true
		: error === ''
			? false
			: error;
};

String.prototype.capitalize = function ( this: string ): string
{
	return this.charAt( 0 ).toUpperCase() + this.slice( 1 );
};

// #region Prototypes
String.prototype.isValidRangeLength = function ( minLength: number, maxLength: number, error: string = '' ): boolean | string
{
	const trimmedLength = this.trim().length;
	return handleConditionalError( trimmedLength >= minLength && trimmedLength <= maxLength, error );
};


String.prototype.hasMaxLength = function ( maxLength: number, error: string = '' ): boolean | string
{
	return handleConditionalError( this.trim().length <= maxLength, error );
};
String.prototype.hasMinLength = function ( minLength: number, error: string = '' ): boolean | string
{
	return handleConditionalError( this.trim().length >= minLength, error );
};

String.prototype.isValidEmail = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( this ), error );
};

String.prototype.hasNoSpecialCharacters = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /[!@#$%^&*(),.?"{}|<>]/.test( this ), error );
};

String.prototype.hasNoLetters = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /[a-zA-Z]/.test( this ), error );
};

String.prototype.hasNoNumbers = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /\d/.test( this ), error );
};

String.prototype.isNotEmpty = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( this.trim() !== '', error );
};
String.prototype.hasNoSpaces = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( !/\s/.test( this ), error );
}; String.prototype.hasOnlyLetters = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /^[a-zA-Z]+$/.test( this ), error );
};
String.prototype.hasOnlyNumbers = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /^[0-9]+$/.test( this ), error );
};
String.prototype.hasNoSpecialCharacters = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /^[a-zA-Z0-9]+$/.test( this ), error );
};
String.prototype.hasOnlyUppercaseLetters = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /^[A-Z]+$/.test( this ), error );
};
String.prototype.hasOnlyLowercaseLetters = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /^[a-z]+$/.test( this ), error );
};
String.prototype.hasLetters = function ( this: string, error: string = '' ): boolean | string
{
	return handleConditionalError( /[a-zA-Z]/.test( this ), error );
};
String.prototype.isEqual = function ( valueToCompare: string, error: string = '' ): boolean | string
{
	return handleConditionalError( this === valueToCompare, error );
};

export default String;