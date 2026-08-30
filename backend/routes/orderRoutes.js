import express from "express";

import authMiddleware from "../middleware/auth.js";

import {
    createOrder,
    getUserOrders
} from "../controllers/orderController.js";


const orderRouter = express.Router();


// =====================================================
// CREATE ORDER
// =====================================================

orderRouter.post(
    "/create",
    authMiddleware,
    createOrder
);


// =====================================================
// GET USER ORDERS
// =====================================================

orderRouter.get(
    "/user-orders",
    authMiddleware,
    getUserOrders
);


export default orderRouter;

