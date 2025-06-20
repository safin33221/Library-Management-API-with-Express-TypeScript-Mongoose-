import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
require('dotenv').config()

let server: Server;
const PORT = 5000
const uri = process.env.MONGODB_URI
async function main() {
    try {
        if (!uri) {
            throw new Error("MONGODB_URI environment variable is not set")
        }
        await mongoose.connect(uri);
        console.log("DATABASE is Connected");
        server = app.listen(PORT, () => {
            console.log(`sever listing port on ${PORT}`);
        })
    } catch (error: any) {
        console.log(error);

    }
}
main()