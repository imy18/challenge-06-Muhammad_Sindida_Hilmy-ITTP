// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import {
    Sequelize
} from "sequelize";

const db = new Sequelize('auth_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;