// Code was written by Muuhammad Sindida Hilmy
// Semua keterangan ada di README.md

import {
    Sequelize
} from "sequelize";
import db from "../config/database.js";

// Mengambil datatype dari sequelize
const {
    DataTypes
} = Sequelize;

const Users = db.define('users', {

    name: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
    },

    password: {
        type: DataTypes.STRING,
    },

    role: {
        type: DataTypes.STRING,
    },

    refresh_token: {
        type: DataTypes.TEXT
    },

}, {
    freezeTableName: true
});
(async () => {
    await db.sync();
})();

export default Users;