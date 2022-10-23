// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import Cars from "../models/carModel.js";
import jwt from "jsonwebtoken";

// Get Cars
export const getCars = async (req, res) => {
    const cars = await Cars.findAll({
        attributes: ['id', 'name', 'price', 'size', 'carId']
    });
    res.json(cars);
}


export const getCarById = async (req, res) => {
    const {
        id
    } = req.params;
    const cars = await Cars.findOne({
        where: {
            id: id
        },
    });
    res.json(cars);
}

// Create Car
export const createCar = async (req, res) => {
    const {
        name,
        price,
        size
    } = req.body;
    try {
        await Cars.create({
            name: name,
            price: price,
            size: size
        });

        return res.status(200).json({
            success: true,
            message: "Mobil Berhasil ditambahkan",
        });
    } catch (error) {
        console.log(error);
    }
}

// Update Car
export const updateCar = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        name,
        price,
        size
    } = req.body;
    try {
        await Cars.update({
            name: name,
            price: price,
            size: size
        }, {
            where: {
                id: id
            },
        });
        return res.status(200).json({
            success: true,
            message: "Mobil Berhasil diupdate",
        });
    } catch (error) {
        console.log(error);
    }
}

// Delete Car
export const deleteCar = async (req, res) => {
    const {
        id
    } = req.params;
    const dataBeforeDelete = await Cars.findOne({
        where: {
            id: id
        },
    });

    const parsedDataProfile = JSON.parse(JSON.stringify(dataBeforeDelete));

    if (!parsedDataProfile) {
        return res.status(400).json({
            success: false,
            message: "Car doesn't exist or has been deleted!",
        });
    }

    await Cars.destroy({
        where: {
            id
        },
    });

    return res.status(200).json({
        success: true,
        message: "Delete Data Successfully",
    });
}