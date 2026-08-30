import jwt from "jsonwebtoken";


const authMiddleware = async (req, res, next) => {

    try {

        const authHeader =
            req.headers.authorization;


        if (!authHeader) {

            return res.json({
                success: false,
                message: "Not authorized. Please login."
            });
        }


        const token =
            authHeader.startsWith("Bearer ")
                ? authHeader.split(" ")[1]
                : null;


        if (!token) {

            return res.json({
                success: false,
                message: "Invalid token"
            });
        }


        const decoded =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );


        req.userId = decoded.id;


        next();

    } catch (error) {

        console.log(
            "Auth middleware error:",
            error
        );

        return res.json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};


export default authMiddleware;

