import express from "express";

import {
    listProduct,
    singleProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();


// Get all products
productRouter.get("/list", listProduct);


// Get single product
productRouter.post("/single", singleProduct);


export default productRouter;