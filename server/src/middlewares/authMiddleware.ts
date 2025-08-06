import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
	admin?: { id: string };
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
	let token = req.cookies?.adminToken || req.headers?.authorization?.split(" ")[1];
	if (!token) {
		res.status(401).json({ message: "Authorization failed" });
		return;
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
		req.admin = { id: decoded.id };
		next();
	} catch(error){
		res.status(400).json({ message: "invalid Token" });
	}
};
