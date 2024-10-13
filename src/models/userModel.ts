import mongoose from "mongoose";

// Interface representing the user
export interface UserSchemaInterface {
    username: string;
    email: string;
    password: string;
    isVerified?: boolean;
    isAdmin?: boolean;
    forgotPasswordToken?: string;
    forgotPasswordTokenExpiry?: Date;
    verifyToken?: string;
    verifyTokenExpiry?: Date;
}

// Define the Mongoose schema using Mongoose-specific configurations
const userSchema = new mongoose.Schema<UserSchemaInterface>({
    username: {
        type: String,
        required: [true, "Please Provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please Provide an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please Provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
});

// Create the model using the interface
const UserModel = mongoose.models.users || mongoose.model<UserSchemaInterface>("users", userSchema);

export default UserModel;
