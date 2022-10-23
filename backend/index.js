// Code was written by Muhammad Sindida Hilmy

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // Agar API bisa diakses diluar domain
import db from "./config/database.js";
import router from "./routes/index.js";

// import Users from "./models/userModel.js";
dotenv.config();
const app = express();

// Memastikan koneksi ke database berjalan dengan baik
try {
    await db.authenticate();
    //Jika koneksinya berjalan dengan baik
    console.log('Database Connected...');
    //await Users.sync(); membuat table

} catch (error) {
    //Jika terdapat error
    console.error(error);
}

// Midleware
app.use(cors({

    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server running at port 5000'));