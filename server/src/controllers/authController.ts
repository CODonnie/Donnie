import { Request, Response } from "express";
import Admin from "../models/adminModels";
import jwt from "jsonwebtoken";

/**
 *@description signup admin user
 *@route POST api/auth/signup
 *@access public
 *@response
 *201: admin 'name' created
 *401: admin account with email already exist
 *500: internal server error
 */
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      res.status(401).json({
        success: false,
        message: "admin account with email already exist",
      });
      return;
    }

    const admin = new Admin({ name, email, password });
    await admin.save();
    res.status(201).json({ success: true, message: `admin ${name} created` });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `internal server error - ${error}` });
  }
};

/**
 *@description login admin user
 *@route POST api/auth/signin
 *@access public
 *@response
 *200: admin 'name' successfully logged in
 *404: admin account 'email' not found
 *401: incorrect ctedentials
 *500: internal server error
 */
export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      res
        .status(404)
        .json({ success: false, message: `admin account ${email} not found` });
      return;
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      res
        .status(401)
        .json({ success: false, message: "incorrect credentials" });
      return;
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    res.cookie("adminToken", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 1 * 24 * 3600 * 1000,
    });
    res
      .status(200)
      .json({
        success: true,
        message: `admin ${admin.name} successfully logged in`,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `internal server error - ${error}` });
  }
};

/**
 *@description logout admin user
 *@route POST api/auth/signout
 *@access public
 *@response
 *200: admin 'name' successfully logged out
 *500: internal server error
 */
export const signout = (req: Request, res: Response) => {
	try {
		res.clearCookie("adminToken");
		res.status(200).json({ success: true, message: "admin logged out successfully" });
	} catch(error){
		res.status(500).json({ success: false, message: `internal server error - ${error}` });
	}
}

