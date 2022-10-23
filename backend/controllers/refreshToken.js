// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import Users from "../models/userModel.js";
import jwt from "jsonwebtoken";

// Function yang berfungsi untuk refresh token
export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        // Validasi
        if (!refreshToken) return res.sendStatus(401);
        // Jika mendapatkan token
        const user = await Users.findAll({
            // Membandingkan token dengan yang ada di database
            where: {
                refresh_token: refreshToken
            }
        });

        // Jika tidak cocok
        if (!user[0]) return res.sendStatus(403);
        // Jika cocok akan melakukan validasi
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            // Jika terdapat error
            if (err) return res.sendStatus(403);
            // Jika tidak terdapat error
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            // Membuat akses token baru
            const accessToken = jwt.sign({
                userId,
                name,
                email
            }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '600s'
            });

            // Kirim respon akses token ke client
            res.json({
                accessToken
            });
        });

    } catch (error) {
        // Jika terdapat error
        console.log(error);
    }
}