import axios from 'axios';
import { ApiRoutes } from '../../configs/apiRoutes.config';
import { AppConfig } from '../../configs/app.config';

const loginService = async ( user: any ) =>
{
	try
	{
		const { data } = await axios.post( `${ AppConfig.apiUrl }${ ApiRoutes.login }`, user );
		if ( data )
		{
			localStorage.setItem( 'userInfo', JSON.stringify( data ) );
		}
		return data;
	} catch ( error )
	{
		console.error( 'Erro durante o login:', error );
		throw error;
	}
};

const registerService = async ( user: any ) =>
{
	try
	{
		const { data } = await axios.post( `${ AppConfig.apiUrl }${ ApiRoutes.register }`, user );
		if ( data )
		{
			localStorage.setItem( 'userInfo', JSON.stringify( data ) );
		}
		return data;
	} catch ( error )
	{
		console.error( 'Erro durante o registro:', error );
		throw error;
	}
};

const logoutService = () =>
{
	localStorage.removeItem( 'userInfo' );
	return null;
};

const upadateProfileService = async ( user: any, token: string ) =>
{
	try
	{
		const { data } = await axios.put( `${ AppConfig.apiUrl }user`, user, {
			headers: {
				Authorization: `Bearer ${ token }`
			}
		} );
		if ( data )
		{
			localStorage.setItem( 'userInfo', JSON.stringify( data ) );
		}
		return data;
	} catch ( error )
	{
		console.error( 'Erro durante a atualização do perfil:', error );
		throw error;
	}
};

export { loginService, logoutService, registerService, upadateProfileService };
