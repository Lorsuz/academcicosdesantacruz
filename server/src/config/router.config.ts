import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import express, { Request /* as RequestExpress */, Response, NextFunction } from 'express';
// import flash from 'connect-flash';
import multer from 'multer';
import path from 'path';
import session from 'express-session';
import zod from 'zod';
import { PrismaClient } from '@prisma/client';
import { fileURLToPath } from 'url';
import { parseISO, format } from 'date-fns';
import util from 'util';

import { promises as fs } from 'fs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const router: express.Router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productionKey = process.env.PRODUCTION_KEY || 'ariel';
const developmentKey = process.env.DEVELOPMENT_KEY || 'ariel';

const secretKey = process.env.NODE_ENV === 'development' ? developmentKey : productionKey;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(
	session({
		secret: secretKey,
		resave: false,
		saveUninitialized: true
	})
);

// router.use(express.static(path.join(__dirname, 'public')));
// router.use(flash());
// router.use((req, res, next) => {
// 	res.locals.sucess_msg = req.flash('sucess_msg');
// 	res.locals.error_msg = req.flash('error_msg');
// 	next();
// });

// class HTTPError extends Error {
// 	constructor(message, code) {
// 		super(message);
// 		this.code = code;
// 	}
// }
// interface Request extends RequestExpress {
// 	userId: number;
// }

export {
	// HTTPError,
	Request,
	Response,
	crypto,
	express,
	format,
	fs,
	multer,
	parseISO,
	path,
	prisma,
	bcrypt,
	router,
	NextFunction,
	zod,
	jwt,
	util,
	secretKey,
	__dirname
};
