import createHttpError from "http-errors";
import Table from "../models/tableModel.mjs";
import mongoose from "mongoose";


export const addTable = async (req, res, next) => {
    try {
        // Extract table number from the request body
        const {tableNo} = req.body;
        
        // Check if table number is provided
        if(!tableNo){
            // Create an error if table number is missing
            const error = createHttpError(400, "Please provide table number!");
            return next(error);
        }

        // Check if a table with the same number already exists
        const isTablePresent = await Table.findOne({tableNo});

        // If table already exists, create an error
        if(isTablePresent){
            const error = createHttpError(400, "Table already exist!");
            return next(error);
        }

        // Create a new table with the provided table number
        const newTable = new Table({tableNo});
        // Save the new table to the database
        await newTable.save();

        // Send a success response with the new table data
        res.status(201).json({ success: true, message: "Table added", data: newTable });

    } catch (error) {
        // Pass any errors to the error handling middleware
        next(error);
    }
}

// Function to get all tables
export const getTables = async (req, res, next) => {
    try {
        // Retrieve all tables from the database
        const tables = await Table.find();
        // Send a success response with the tables data
        res.status(200).json({ success: true, data: tables });
        
    } catch (error) {
        // Pass any errors to the error handling middleware
        next(error);
    }
}

// Function to get a table by its ID
export const getTableById = async (req, res, next) => {
    try {
        // Retrieve the table with the specified ID from the database
        const table = await Table.findById(req.params.id);

        // If table is not found, create an error
        if(!table){
            const error = createHttpError(404, "Table not found");
            return next(error);
        }
        // Send a success response with the table data
        res.status(200).json({ success: true, data: table });
    } catch (error) {
        // Pass any errors to the error handling middleware
        next(error);
    }
}

// Function to update a table's status and current order
export const updateTable = async (req, res, next) => {
    try {
        // Extract status and order ID from the request body
        const { status, orderId } = req.body;

        const { id } = req.params;
        
            if(!mongoose.Types.ObjectId.isValid(id)){
                const error = createHttpError(404, "Invalid id!");
                return next(error)
            }

        // Update the table with the specified ID with the new status and order ID
        const table = await Table.findByIdAndUpdate(
            id,
            { status, currentOrder: orderId },
            { new: true }
        );

        // If table is not found, create an error
        if(!table){
            const error = createHttpError(400, "Table not found");
            return next(error);
        }

        // Send a success response with the updated table data
        res.status(200).json({ success: true, message: "Table updated!", data: table });

    } catch (error) {
        // Pass any errors to the error handling middleware
        next(error);
    }
}