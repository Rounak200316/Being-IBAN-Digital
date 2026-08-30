import express from "express";

import cors from "cors";

import "dotenv/config";

import connectDb from "./config/monodb.js";

import userRouter from "./routes/userRoutes.js";

import productRouter from "./routes/productRoutes.js";

import cartRouter from "./routes/cartRoutes.js";

import orderRouter from "./routes/orderRoutes.js";
import meetingRouter from "./routes/meetingRoutes.js";
import sendEmail from "./utils/email.js";


const app = express();

const port = process.env.PORT || 4000;


// =====================================================
// CONNECT DATABASE
// =====================================================

connectDb();


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(express.json());

app.use(cors());


// =====================================================
// ROUTES
// =====================================================

app.use(
    "/api/user",
    userRouter
);

app.use(
    "/api/product",
    productRouter
);

app.use(
    "/api/cart",
    cartRouter
);

app.use(
    "/api/order",
    orderRouter
);
app.use("/api/meeting", meetingRouter);

// =====================================================
// TEST API
// =====================================================

app.get(
    "/",
    (req, res) => {

        res.send("API working");

    }
);


// =====================================================
// START SERVER
// =====================================================

app.listen(
    port,
    () => {

        console.log(
            "Server started on port " + port
        );

    }
);

