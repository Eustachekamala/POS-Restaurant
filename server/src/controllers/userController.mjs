import createHttpError from "http-errors";
import User from "../models/userModel.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import config from "../config/config.mjs";

/**
 * Registers a new user.
 */
export const register = async (req, res, next) => {
    try {
        // Extract name, email, password, phone, and role from the request body
        const { name, email, password, phone, role } = req.body;

        // Check if any required field is missing
        if(!name || !email || !password || !phone || !role){
            const error = createHttpError(400, "All fields are required!");
            return next(error);
        }

        // Check if a user with the provided email already exists
        const isUserPresent = await User.findOne({email});
        if(isUserPresent){
            const error = createHttpError(400, "User already exists!");
            return next(error);
        }

        // Create a new user object with the provided data
        const user = { name, phone, email, password, role };

        // Create a new User instance and save it to the database
        const newUser = User(user);
        await newUser.save();

        // Respond with a success message and the newly created user data
        res.status(201).json({ success: "New user created", data: newUser });

    } catch (error) {
        // Pass any errors to the next middleware
        next(error);
    }
}


/**
 * Login user.
 */
export const login = async (req, res, next) => {
    try {
        // Extract email and password from the request body
        const { email, password } = req.body;

        // Check if email or password is missing
        if(!email || !password){
            const error = createHttpError(400, "All fields are required");
            return next(error);
        }

        // Find user by email
        const isUserPresent = await User.findOne({email});
        // If user is not found, return an error
        if(!isUserPresent){
            const error = createHttpError(401, "Invalid Credentials");
            return next(error);
        }

        // Compare provided password with stored password
        const isMatch = await bcrypt.compare(password, isUserPresent.password);
        // If passwords do not match, return an error
        if(!isMatch){
            const error = createHttpError(401, "Invalid Credentials");
            return next(error);
        }

        // Generate JWT token for the authenticated user
        const accessToken = jwt.sign({_id: isUserPresent._id}, config.accessTokenSecret, {
            expiresIn: '1d'
        });

        // Set the JWT token in a cookie
        res.cookie('accessToken', accessToken, {
            maxAge : 1000 * 60 * 60 * 24 * 30,
            httpOnly : true,
            sameSite : 'none',
            secure : true
        });

        // Respond with success message and access token
        res.status(200).json({ success: true, message : "Login Succesfull", 
            data : isUserPresent,
         });

    } catch (error) {
        // Pass any errors to the next middleware
        next(error);
    }
}


export const getUserData = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        res.status(200).json({success: true, data : user});
    } catch (error) {
        next(error)
    }
}