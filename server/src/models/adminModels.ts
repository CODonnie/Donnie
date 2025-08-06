import { Document, Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

interface IAdmin extends Document {
	name: string;
	email: string;
	password: string;
	comparePassword(adminPassword: string): Promise<boolean>;
}

const AdminSchema = new Schema<IAdmin> ({
	name: {type: String, required: true},
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true }
}, { timestamps: true });

AdminSchema.pre<IAdmin>("save", async function(next){
	if(!this.isModified("password")) return next();

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.comparePassword = async function(adminPassword: string){
	return await bcrypt.compare(adminPassword, this.password)
};

const Admin = models.Admin || model<IAdmin>("Admin", AdminSchema);

export default Admin;
