import Carmodel from "../model/Carmodel";
import Brand from "../model/Brand";
import mongoose from "mongoose";


export const getAllCarmodels = async (req, res, next) => {
    let carmodels;
    try {
        carmodels = await Carmodel.find().populate("brands");
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (!carmodels) {
        return res.status(404).json({ message: "No carmodels found" });
    }
    return res.status(200).json({ carmodels });
}

export const addCarmodel = async (req, res, next) => {
    const { carname, model, year, price, fuel, transmission, bodytype, status, brands } = req.body;

    let existingBrand;
    try {
        existingBrand = await Brand.findById(brands);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Brand not found" });
    }
    if (!existingBrand) {
        return res.status(400).json({ message: "Brand not found" });
    }
    const carmodel = new Carmodel({
        carname,
        model,
        year,
        price,
        fuel,
        transmission,
        bodytype,
        status,
        brands
    });
    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await carmodel.save({ sess });
        await sess.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Brand not found" });
    }
    return res.status(201).json({ carmodel });
}

export const editCarmodel = async (req, res, next) => {
    const { carname, model, year, price, fuel, transmission, bodytype, status, brands } = req.body;
    const carmodelId = req.params.id;
    let carmodel;
    try {
        carmodel = await Carmodel.findByIdAndUpdate(carmodelId, {
            carname,
            model,
            year,
            price,
            fuel,
            transmission,
            bodytype,
            status,
            brands
        }).populate("brands");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
    if (!carmodel) {
        return res.status(404).json({ message: "Carmodel not found" });
    }
    return res.status(200).json({ message: "Carmodel updated successfully" });
}

export const deleteCarmodel = async (req, res, next) => {
    const carmodelId = req.params.id;
    let carmodel;
    try {
        carmodel = await Carmodel.findByIdAndDelete(carmodelId);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
    if (!carmodel) {
        return res.status(404).json({ message: "Carmodel not found" });
    }
    return res.status(200).json({ message: "Carmodel deleted successfully" });
}

export const getCarmodelById = async (req, res, next) => {
    const carmodelId = req.params.id;
    let carmodel;
    try {
        carmodel = await Carmodel.findById(carmodelId).populate("brands");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
    if (!carmodel) {
        return res.status(404).json({ message: "Carmodel not found" });
    }
    return res.status(200).json({ carmodel });
}

export const searchCarmodel = async (req, res, next) => {
    const { carname, model, year, price, fuel, transmission, bodytype, status, brands } = req.body;
    let carmodels;
    let filter = {};
    if (carname) {
        filter.carname = carname;
    }
    if (model) {
        filter.model = model;
    }
    if (year) {
        filter.year = year;
    }
    if (price) {
        filter.price = price;
    }
    if (fuel) {
        filter.fuel = fuel;
    }
    if (transmission) {
        filter.transmission = transmission;
    }
    if (bodytype) {
        filter.bodytype = bodytype;
    }
    if (status) {
        filter.status = status;
    }
    if (brands) {
        filter.brands = brands;
    }
    try {
        carmodels = await Carmodel.find(filter).populate("brands");
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (!carmodels) {
        return res.status(404).json({ message: "No carmodels found" });
    }
    return res.status(200).json({ message: "Carmodels found", carmodels });
}