import Stock from "../model/Stock";
import Carmodel from "../model/Carmodel";
import mongoose from "mongoose";

export const getAllStock = async (req, res, next) => {
    let stock;
    try {
        stock = await Stock.find().populate("carmodels");
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (!stock) {
        return res.status(404).json({ message: "No stock found" });
    }
    return res.status(200).json({ stock });
}

export const addstock = async (req, res, next) => {
    const { carmodels, quantity, sold } = req.body;

    let existingCarmodel;
    try {
        existingCarmodel = await Carmodel.findById(carmodels);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Carname does not exist" });
    }
    if (!existingCarmodel) {
        return res.status(400).json({ message: "Carname does not exist" });
    }
    const stock = new Stock({
        carmodels,
        quantity,
        sold
    });
    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await stock.save({ sess });
        await sess.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error Wrong" });
    }
    return res.status(201).json({ stock });
}

export const editstock = async (req, res, next) => {
    const { carmodels, quantity, sold } = req.body;
    const stockId = req.params.id;
    let stock;
    try {
        stock = await Stock.findByIdAndUpdate(stockId, {
            carmodels,
            quantity,
            sold
        }).populate("carmodels");
        await stock.carmodels.stocks.pull(stock);
        await stock.carmodels.save();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
    if (!stock) {
        return res.status(404).json({ message: "No stock found" });
    }
    return res.status(200).json({ stock });
}

export const deleteStock = async (req, res, next) => {
    const stockId = req.params.id;
    let stock;
    try {
        stock = await Stock.findByIdAndDelete(stockId);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
    if (!stock) {
        return res.status(404).json({ message: "No stock found" });
    }
    return res.status(200).json({ message: "Stock deleted successfully" });
}

export const getStockId = async (req, res, next) => {
    const stockId = req.params.id;
    let stock;
    try {
        stock = await Stock.findById(stockId);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (!stock) {
        return res.status(404).json({ message: "No stock found" });
    }
    return res.status(200).json({ stock });
}

export const searchStock = async (req, res, next) => {
    const { carmodels, quantity, sold } = req.body;
    let stock;
    let filter = {};
    if (carmodels) {
        filter.carmodels = carmodels;
    }
    if (quantity) {
        filter.quantity = quantity;
    }
    if (sold) {
        filter.sold = sold;
    }
    try {
        stock = await Stock.find(filter).populate("carmodels");
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (!stock) {
        return res.status(404).json({ message: "No stock found" });
    }
    return res.status(200).json({ stock });
}