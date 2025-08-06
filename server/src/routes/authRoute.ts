import express from "express";
import { signup, signin, signout } from "../controllers/authController";

const authRoute = express.Router();

authRoute.post('/signup', signup);
authRoute.post('/signin', signin);
authRoute.get('/signout', signout);

export default authRoute;
