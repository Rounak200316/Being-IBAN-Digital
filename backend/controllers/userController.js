import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// -----------------------------
// Create JWT
// -----------------------------
const createToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};


// -----------------------------
// Register User
// -----------------------------
const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check fields
        if (!name || !email || !password) {
            return res.json({
                success: false,
                message: "Please fill in all fields"
            });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email"
            });
        }

        // Validate password
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Password must be at least 8 characters"
            });
        }

        // Check existing user
        const exists = await userModel.findOne({ email });

        if (exists) {
            return res.json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(
            password,
            salt
        );

        // Create user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        // Create token
        const token = createToken(user._id);

        return res.json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        console.log("Register error:", error);

        return res.json({
            success: false,
            message: error.message
        });
    }
};


// -----------------------------
// Login User
// -----------------------------
const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Check fields
        if (!email || !password) {
            return res.json({
                success: false,
                message: "Please enter email and password"
            });
        }

        // Find user
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "User doesn't exist"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Create token
        const token = createToken(user._id);

        return res.json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        console.log("Login error:", error);

        return res.json({
            success: false,
            message: error.message
        });
    }
};


export {
    loginUser,
    registerUser
};

