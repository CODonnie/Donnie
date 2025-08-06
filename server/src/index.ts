import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/dbConnect";
import cors from "cors";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middlewares/errorMiddleware";
import authRoute from "./routes/authRoute";

//init
dotenv.config();
ConnectDB();
const port = process.env.PORT || 3839;
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use('/api/auth', authRoute);

//errorMiddlewares
app.use(notFound);
app.use(errorHandler);


//server
app.listen(port, () => console.log(`server started on http//localhost:${port}`));

export { app };
