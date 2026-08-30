import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDb from "./config/monodb.js";

import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import meetingRouter from "./routes/meetingRoutes.js";

const app = express();

// =====================================================
// MIDDLEWARE
// =====================================================

app.use(express.json());

app.use(cors());

// =====================================================
// DATABASE
// =====================================================

connectDb();

// =====================================================
// ROUTES
// =====================================================

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/meeting", meetingRouter);

// =====================================================
// TEST API
// =====================================================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Being IBAN Digital API working",
    });
});

// =====================================================
// VERCEL
// =====================================================

export default app;