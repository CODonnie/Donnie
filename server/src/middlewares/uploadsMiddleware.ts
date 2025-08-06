import {imageUploader, resumeUploader} from "../config/cloudinary";
import multer from "multer";

export const uploadImages = multer({ storage: imageUploader });
export const uploadResumes = multer({ storage: resumeUploader });
