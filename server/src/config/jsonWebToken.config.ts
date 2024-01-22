import jwt from 'jsonwebtoken';
import generateStrongKey from '../utils/generateStrongKey';

export default function createJWTToken(userId: number): any {
	const secretKey = generateStrongKey();
	const payload = { userId };
	const options = { expiresIn: '1h' };
	return jwt.sign(payload, secretKey, options);
}
