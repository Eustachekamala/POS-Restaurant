import createHttpError from "http-errors";
import User from "../models/userModel.mjs"

/**
 * Registers a new user.
 *Sure! Here's a simple explanation of the code:
    1. The `register` function handles user registration.
    2. It extracts user details (`name`, `email`, `password`, `phone`, `role`) from the request body.
    3. It checks if any of these details are missing and returns an error if so.
    4. It checks if a user with the same email already exists and returns an error if so.
    5. It creates a new user with the provided details and saves it to the database.
    6. It responds with a success message and the new user data if registration is successful.
    7. If any error occurs during the process, it passes the error to the next middleware.
 */
export const register = async (req, res, next) => {
    try {
        const { name, email, password, phone, role } = req.body;
        if(!name || !email || !password || !phone || !role){
            const error = createHttpError(400, "All fileds are required!")
            next(error)
        }

        const isUserPresent = await User.findOne({email});
        if(isUserPresent){
            const error = createHttpError(400, "User already exist!");
            next(error)
        }

        const user = { name, phone, email, password, role};
        const newUser = User(user);
        await newUser.save();

        res.status(201).json({succes : "New user created", data : newUser});

    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {

}
