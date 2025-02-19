import createHttpError from "http-errors";
import config from "../config/config.mjs";
import User from "../models/userModel.mjs";
import jwt from 'jsonwebtoken';

const isVerifiedUser = async (req, res, next) => {
    try {
        const { accessToken } = req.cookies;

        if (!accessToken) {
            const error = createHttpError(401, "Please provide token");
            return next(error);
        }

        const decodeToken = jwt.verify(accessToken, config.accessTokenSecret);

        const user = await User.findById(decodeToken._id);

        if (!user) {
            const error = createHttpError(401, "User not found!");
            return next(error);
        }

        req.user = user; 
        next();

    } catch (error) {
        console.error("Token verification error:", error);
        const err = createHttpError(401, "Invalid Token");
        next(err);
    }
}

export default isVerifiedUser;