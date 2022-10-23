// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import {
    Sequelize
} from "sequelize";
import db from "../config/database.js";

// Mengambil datatype dari sequelize
const {
    DataTypes
} = Sequelize;

const Cars = db.define('cars', {

    name: {
        type: DataTypes.STRING,
    },

    price: {
        type: DataTypes.INTEGER,
    },

    size: {
        type: DataTypes.STRING,
    },

    carId: {
        type: DataTypes.INTEGER,
    },

}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Cars;