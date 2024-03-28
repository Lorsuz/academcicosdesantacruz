import createError from 'http-errors';
import express, { Application, Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

import dotenv from 'dotenv';

import { errorHandler } from './middlewares/error.middleware.js';
import { connectDB } from './config/mongoose.config.js';

dotenv.config();

connectDB();

import indexRouter from './routers/index.route.js';
// import authRouter from './routers/auth.router.js';

import userRouter from './routers/user.router.js';
// import categoriesRouter from './routers/category.router.js';
import productsRouter from './routers/products.router.js';
// import ordersRouter from './routers/order.router.js';

const app: Application = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use('/api', indexRouter);

// app.use('/api/auth', authRouter);

// app.use('/api/categories', categoriesRouter);
// app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
	next(createError(404));
});

// error handler
app.use((err: { message: string; status: number }, req: Request, res: Response) => {
	// set locals, only providing error in development
	res.locals.message = err.message;

	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export default app;
