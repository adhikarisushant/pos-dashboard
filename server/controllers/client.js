import Product from "../models/Product.js";
import User from '../models/User.js';
import ProductStat from "../models/ProductStat.js";

export const getProducts = async(req, res) => {
    try{
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id,
                });
                
                return {
                    ...product._doc,
                    stat,
                };
            })
        );
        // console.log("productsWithStats =>", typeof productsWithStats, productsWithStats)
            res.status(200).json(productsWithStats);    

    } catch(err){
        res.status(404).json({ message: error.message });
    }
} 

export const getCustomers = async(req, res) => {
    try{
        const customers = await User.find({ role: "user" }).select("-password");
        res.status(200).json(customers);
    } catch(err){
        res.status(404).json({ message: error.message });
    }
}