import mongoose from "mongoose";


// -----------------------------
// Order Item Schema
// -----------------------------

const orderItemSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        quantity: {
            type: Number,
            required: true,
            min: 1
        },

        image: {
            type: Array,
            default: []
        },

        category: {
            type: String,
            default: ""
        },

        subCategory: {
            type: String,
            default: ""
        }
    },
    {
        _id: false
    }
);


// -----------------------------
// Order Schema
// -----------------------------

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },

        customer: {
            name: {
                type: String,
                required: true
            },

            email: {
                type: String,
                required: true
            },

            phone: {
                type: String,
                required: true
            },

            address: {
                type: String,
                required: true
            },

            city: {
                type: String,
                required: true
            },

            state: {
                type: String,
                required: true
            },

            pincode: {
                type: String,
                required: true
            }
        },

        items: {
            type: [orderItemSchema],
            required: true
        },

        totalAmount: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            default: "Order Placed"
        },

        date: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const orderModel =
    mongoose.models.order ||
    mongoose.model("order", orderSchema);


export default orderModel;

