import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("DB connected");
    } catch (error) {
        console.error("Error db connection: ", error.message);
        process.exit(1);
    }
}
