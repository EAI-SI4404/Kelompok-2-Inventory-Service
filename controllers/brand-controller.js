import Brand from "../model/Brand";

export const getAllBrands = async (req, res, next) => {
    let brands;
    try {
        brands = await Brand.find();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (!brands) {
        return res.status(404).json({ message: "No brands found" });
    }
    return res.status(200).json({brands});
};

export const addbrand = async (req, res, next) => {
    const { name, country, website } = req.body;
    let existingBrand;
    try {
        existingBrand = await Brand.findOne({ name: name , country: country });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (existingBrand) {
        return res.status(400).json({ message: "Brand already exists" });
    }
    const brand = new Brand({
        name : req.body.name,
        country : req.body.country,
        website,
    });
    try {
        await brand.save();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    return res.status(201).json({ brand });
};

export const editbrand = async (req, res, next) => {
    const { name, country, website } = req.body;
    const brandId = req.params.id;
    let brand;
    try {
        brand = await Brand.findByIdAndUpdate(brandId, {
            name,
            country,
            website
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
    if (!brand) {
        return res.status(404).json({ message: "Brand not found" });
    }
    return res.status(200).json({ message: "Brand updated successfully", brand });
};

export const getBrandId = async (req, res, next) => {
    const brandId = req.params.id;
    let brand;
    try {
        brand = await Brand.findById(brandId);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (!brand) {
        return res.status(404).json({ message: "Brand not found" });
    }
    return res.status(200).json({ message: "Brand found", brand });
};

export const deleteBrand = async (req, res, next) => {
    const brandId = req.params.id;
    let brand;
    try {
        brand = await Brand.findByIdAndDelete(brandId);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (!brand) {
        return res.status(404).json({ message: "Brand not found" });
    }
    return res.status(200).json({ message: "Brand deleted successfully", brand });
}

export const search = async (req, res, next) => {
    const { name, country } = req.body;
    let brands;
    let query = {};

    // Construct the query object based on user input
    if (name) {
        query.name = name;
    }
    if (country) {
        query.country = country;
    }
    try {
        brands = await Brand.find(query);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
    if (brands.length === 0) {
        return res.status(404).json({ message: "No Brands found" });
    }
    return res.status(200).json({message: "Search results", brands});
}