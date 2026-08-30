import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import sendEmail from "../utils/email.js";

// =====================================================
// CREATE ORDER
// =====================================================

const createOrder = async (req, res) => {
  try {
    const userId = req.userId;

    const { customer, items, totalAmount, date } = req.body;

    // -----------------------------
    // Validate user
    // -----------------------------

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // -----------------------------
    // Validate order
    // -----------------------------

    if (!customer) {
      return res.json({
        success: false,
        message: "Customer information is required",
      });
    }

    if (!items || items.length === 0) {
      return res.json({
        success: false,
        message: "Order items are required",
      });
    }

    if (totalAmount === undefined || totalAmount === null) {
      return res.json({
        success: false,
        message: "Total amount is required",
      });
    }

    // -----------------------------
    // Create order
    // -----------------------------

    const newOrder = new orderModel({
      userId,

      customer,

      items,

      totalAmount,

      date: date || new Date().toLocaleDateString(),
    });

    const order = await newOrder.save();

    await sendEmail({
      to: customer.email,
      subject: "Order Confirmation - Being IBAN Digital",

      text: `
Hello ${customer.name},

Thank you for your order with Being IBAN Digital.

Your order has been successfully placed.

Order Total: ₹${totalAmount}

We will process your order shortly.

Regards,
Being IBAN Digital
    `,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #322217;">

            <h2 style="color:#754e17;">
                Order Confirmed
            </h2>

            <p>
                Hello <strong>${customer.name}</strong>,
            </p>

            <p>
                Thank you for your order with
                <strong>Being IBAN Digital</strong>.
            </p>

            <p>
                Your order has been successfully placed.
            </p>

            <div style="
                background:#f5eee6;
                padding:20px;
                margin:20px 0;
            ">

                <p>
                    <strong>Order ID:</strong>
                    ${order._id}
                </p>

                <p>
                    <strong>Order Total:</strong>
                    ₹${totalAmount}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${date || new Date().toLocaleDateString()}
                </p>

            </div>

            <p>
                We will process your order shortly.
            </p>

            <p>
                Regards,<br>
                <strong>Being IBAN Digital</strong>
            </p>

        </div>
    `,
    });

    // -----------------------------
    // Clear user's cart
    // -----------------------------

    await userModel.findByIdAndUpdate(userId, {
      cartData: {},
    });

    // -----------------------------
    // Response
    // -----------------------------

    return res.json({
      success: true,

      message: "Order placed successfully",

      order,
    });
  } catch (error) {
    console.log("Create order error:", error);

    return res.json({
      success: false,

      message: error.message,
    });
  }
};

// =====================================================
// GET USER ORDERS
// =====================================================

const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId;

    const orders = await orderModel.find({ userId }).sort({ createdAt: -1 });

    return res.json({
      success: true,

      orders,
    });
  } catch (error) {
    console.log("Get orders error:", error);

    return res.json({
      success: false,

      message: error.message,
    });
  }
};

export { createOrder, getUserOrders };
