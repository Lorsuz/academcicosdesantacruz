import { jwt, Request, Response, NextFunction, secretKey } from '../config/router.config.js';
import User from '../models/user.model.js';
import expressAsyncHandler from 'express-async-handler';

const generateToken = (id: number | string) => jwt.sign({ id }, secretKey, { expiresIn: '1d' });

const isAuthenticated = expressAsyncHandler(async (req: Request & any, res: Response, next: NextFunction) => {
  try {
    let token: string = '';
    if (req.headers.authorization && typeof req.headers.authorization === 'string' && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      throw new Error('Faça login para acessar esta página');
    }

    const decoded: any = await new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      });
    });

    if (decoded.id) {
      const user = await User.findById(decoded.id).select('-password');
      
      if (user) {
        req.user = user;
        next();
      } else {
        console.error('Nenhum usuário encontrado com este ID:', decoded.id);
        throw new Error('Nenhum usuário encontrado com este token');
      }
    } else {
      console.error('ID não encontrado no token decodificado:', decoded);
      throw new Error('Nenhum ID encontrado no token decodificado');
    }

  } catch (error: any) {
    console.error('Erro na verificação do token:', error);
    res.status(401).json({ message: error.message ? error.message : 'O token fornecido é inválido' });
    throw error;
  }
});


const isAdmin = (req: Request & any, res: Response, next: NextFunction) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401).json({ message: 'Este token não pertence a um administrador ' });
	}
};

export { isAuthenticated, generateToken, isAdmin };
