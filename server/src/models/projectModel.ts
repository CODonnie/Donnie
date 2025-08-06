import {Document, Schema, models, model} from "mongoose";

// interfaces
export interface IStorySection {
  section: string;
  content: string;
  images?: string[]; // URLs or Cloudinary public_ids
}

export interface IProject {
  title: string;
  type: "WebDev" | "UI/UX" | "Graphics";
  description: string;
  info: string;
  role: string;
  stack: string[];
  thumbnail: string; // URL or file ID
  tags: string[];
  isFeatured: boolean;
  status: "completed" | "in-progress" | "planned";
  startDate: string;
  endDate: string;
  story: IStorySection[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ProjectDocument extends IProject, Document {}

const StorySectionSchema = new Schema({
  section: {type: String, required: true},
  content: {type: String, required: true},
  images: [{type: String}],
});

const ProjectSchema = new Schema<ProjectDocument>(
  {
    title: {type: String, required: true},
    type: {
      type: String,
      enum: ["WebDev", "UI/UX", "Graphics"],
      required: true,
    },
    description: {type: String, required: true},
    info: {type: String, required: true},
    role: {type: String, required: true},
    stack: [{type: String, required: true}],
    thumbnail: {type: String, required: true},
    tags: [{type: String, required: true}],
    isFeatured: {type: Boolean, default: false},
    status: {
      type: String,
      enum: ["completed", "in-progress", "planned"],
      required: true,
    },
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    story: [StorySectionSchema],
    liveUrl: {type: String},
    repoUrl: {type: String},
  },
  {
    timestamps: true,
  }
);

const Project = models.Project || model<ProjectDocument>("Project", ProjectSchema);

export default Project;
