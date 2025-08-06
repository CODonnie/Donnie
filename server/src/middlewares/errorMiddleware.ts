import { Request, Response, NextFunction } from "express";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
	const err = new Error(`${req.originalUrl} not found`);
	res.status(404);
	next(err);
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = err.message;

	if (err.name === "CastError" && err.kind === "ObjectId") {
		statusCode = 404;
		message = "resources not found";
	} else if (err.name === "ValidationError"){
		statusCode = 400;
		message= err.message;
	}

	res.status(statusCode).json({
		message,
		stack: process.env.NODE_ENV !== "development" ? null : err.stack
	});
}
