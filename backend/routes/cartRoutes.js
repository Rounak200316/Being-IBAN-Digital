import express from "express";

import authMiddleware from "../middleware/auth.js";

import {
    getCart,
    updateCart
} from "../controllers/cartController.js";


const cartRouter = express.Router();


cartRouter.get(
    "/get",
    authMiddleware,
    getCart
);


cartRouter.post(
    "/update",
    authMiddleware,
    updateCart
);


export default cartRouter;

