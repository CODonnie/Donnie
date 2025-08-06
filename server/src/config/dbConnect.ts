import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
	const mongoUri = process.env.MONGO_URI as string;
	try {
		const conn = await mongoose.connect(mongoUri);
		console.log(`db connected to ${conn.connection.host}`);
	} catch(error) {
		console.error(`db connection error ${error}`);
		process.exit(1);
	}
};

export default ConnectDB;
