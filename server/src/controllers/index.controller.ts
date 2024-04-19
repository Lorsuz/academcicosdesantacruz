import { Request, Response, getAuthSheets } from '../config/router.config.js';
import { sendEmailFromFormContact } from '../services/email.service.js';

export const formForContactWithEmail = async ( req: Request, res: Response ) =>
{
	const data = req.body;
	console.log( data );

	try
	{
		await sendEmailFromFormContact( data ) ? res.json( { status: '200' } ) : res.json( { status: '401' } );
	} catch ( error )
	{
		res.json( { status: '401' } );
	}
};

export const formForParadeWithUs = async ( req: Request, res: Response ) =>
{
	const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
	const metadata = await googleSheets.spreadsheets.values.get( {
		auth,
		spreadsheetId,
		range: 'Sheet1'
	} );

	res.send( metadata.data );

};
