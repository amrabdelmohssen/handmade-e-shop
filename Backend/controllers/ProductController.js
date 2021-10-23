const Product = require("../models/Product");

exports.getProducts = async(req, res) => {
    try {
        // const prod = await product.find({});
        const prod = await Product.find({});
        console.log("success to get data");
        return res.status(200).json(prod);
    } catch (e) {
        console.log("some thing error");
        return res.status(500).json(e.message);
    }
};

exports.getOneProduct = async(req, res) => {
    try {
        const singleOrderItem = await Product.findOne({ _id: req.params.id });
        return res.status(200).json(singleOrderItem);
    } catch (e) {
        return res.status(500).json(e.message);
    }
};

exports.addProduct = async(req, res) => {
    try {
        const {
            name,
            description,
            richDescription,
            countingStock,
            image,
            images,
            brand,
            numReviews,
            price,
            rating,
            isFeatured,
            dateCreated,
            // category
        } = req.body;
        const newname = new Product({
            name,
            description,
            richDescription,
            countingStock,
            image,
            images,
            brand,
            numReviews,
            price,
            rating,
            isFeatured,
            dateCreated,
            // category
        });
        const prod = await newname.save();
        if (!prod) {
            throw new Error("no product to add");
        }
        return res.status(201).json(prod);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

exports.updateProduct = async(req, res) => {
    try {
        const {
            name,
            description,
            richDescription,
            countingStock,
            image,
            images,
            brand,
            numReviews,
            price,
            rating,
            isFeatured,
            dateCreated,
            // category
        } = req.body;
        Product.findByIdAndUpdate(
            req.params.id, {
                name,
                description,
                richDescription,
                countingStock,
                image,
                images,
                brand,
                numReviews,
                price,
                rating,
                isFeatured,
                dateCreated,
                // category
            }, { new: true }
        );

        const prod = await newname.save();
        return res.status(200).json(prod);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

exports.updateProduct = async(req, res) => {
    try {
        const newname = await product.findByIdAndUpdate(req.params.id,
            req.body, { new: true })
        if (!newname) {
            return res.status(404).send()
        }
        res.status(200).send(newname)
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

exports.deleteProduct = async(req, res) => {
    try {
        const prod = await Product.findByIdAndRemove(req.params.id);
        return res.status(200).json(prod);
    } catch (e) {
        return res.status(500).json(e.message);
    }
};