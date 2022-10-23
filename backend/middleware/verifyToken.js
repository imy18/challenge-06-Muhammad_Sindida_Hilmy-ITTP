// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import jwt from "jsonwebtoken";

// Function untuk memverifikasi token
export const verifyToken = (req, res, next) => {
    // Mengambil header authorization
    const authHeader = req.headers['authorization'];
    // Mengambil token
    const token = authHeader && authHeader.split(' ')[1];
    // Validasi
    if (token == null) return res.sendStatus(401);
    // Jika dapat token akan di verifikasi
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        // Jika terdapat error
        if (err) return res.sendStatus(403);
        req.email = decoded.email;
        next();
    })
}