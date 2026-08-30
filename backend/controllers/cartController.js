import userModel from "../models/userModel.js";


// -----------------------------
// Get User Cart
// -----------------------------

const getCart = async (req, res) => {

    try {

        const user = await userModel.findById(
            req.userId
        );


        if (!user) {

            return res.json({
                success: false,
                message: "User not found"
            });
        }


        return res.json({
            success: true,
            cartData: user.cartData
        });

    } catch (error) {

        console.log(error);

        return res.json({
            success: false,
            message: error.message
        });
    }
};


// -----------------------------
// Update User Cart
// -----------------------------

const updateCart = async (req, res) => {

    try {

        const { cartData } = req.body;


        await userModel.findByIdAndUpdate(
            req.userId,
            {
                cartData
            }
        );


        return res.json({
            success: true,
            message: "Cart updated"
        });

    } catch (error) {

        console.log(error);

        return res.json({
            success: false,
            message: error.message
        });
    }
};


export {
    getCart,
    updateCart
};
