import mongoose from "mongoose";
import 'dotenv/config'
export async function configDB(){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB connected !");
    } catch (error) {
        console.log(error);
    }
}