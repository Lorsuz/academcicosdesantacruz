import jwt from 'jsonwebtoken';
import generateStrongKey from '../utils/generateStrongKey.js';
import { secretKey as secretEnvKey } from './router.config.js';

export default function createJWTToken(userId: number): any {
	const secretKey = process.env.NODE_ENV === 'development' ? secretEnvKey : generateStrongKey();
	const payload = { userId };
	const options = { expiresIn: '1h' };
	return jwt.sign(payload, secretKey, options);
}
