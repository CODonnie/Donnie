import { v2 as cloudinary } from "cloudinary";
const { CloudinaryStorage } = require("multer-storage-cloudinary");

//.env - cloudinary config
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

//cloudinary storage setup
export const imageUploader = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: "media/images",
		allowed_formats: ["jpg", "jpeg", "png"]
	}
});

export const resumeUploader = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: "media/docs",
		allowed_formats: ["pdf", "docs"],
		resource_type: "raw",
	}
})
