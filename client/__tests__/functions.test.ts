import { validateNoNumbers } from '../src/utils/validateValues.ts';

test( 'Teste da função', () =>
{
	expect( validateNoNumbers( 'a' ) ).toBe( '' );
} );
