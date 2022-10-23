// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import express from "express";
import {
    getUsers,
    Register,
    Login,
    Logout
} from "../controllers/users.js";

import {
    getCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
} from "../controllers/cars.js";

import {
    verifyToken
} from "../middleware/verifyToken.js";

import {
    refreshToken
} from "../controllers/refreshToken.js";

const router = express.Router();
const prefix = "/v1/api/";

// ============================= USERS LOGIN ===================================

router.get(prefix + 'users', verifyToken, getUsers);
router.post(prefix + 'users', Register);
router.post(prefix + 'login', Login);
router.get(prefix +'token', refreshToken);
router.delete(prefix + 'logout', Logout);

// ============================== DATA CARS ====================================

router.get(prefix + 'cars', verifyToken, getCars);
router.get(prefix + 'cars/:id', verifyToken, getCarById);
router.post(prefix + 'cars',verifyToken, createCar);
router.put(prefix + 'cars/:id', verifyToken, updateCar);
router.delete(prefix + 'cars/:id', verifyToken, deleteCar);

export default router;