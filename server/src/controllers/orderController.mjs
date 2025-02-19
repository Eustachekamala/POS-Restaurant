import Order from "../models/orderModel.mjs"
import createHttpError from "http-errors"

const addOrder = async (req, res, next ) => {
    try {
        const order = new Order(req.body); // Create a new order with the request body
        await order.save(); // Save the order to the database
        res.status(201).json({succes : true, message : "Order created", data: order}); // Send a success response with the created order
    } catch (error) {
        next(error) // Pass the error to the error handling middleware
    }
}

const getOrderById = async (req, res, next ) => {
    try {
        const order = await Order.findById(req.params.id); // Find the order by ID from the request parameters
        if(!order) {
            const error = createHttpError(404, " Order not found"); // Create a 404 error if the order is not found
            return next(error) // Pass the error to the error handling middleware
        }
        res.status(200).json({succes: true, data: order}) // Send a success response with the found order
    } catch (error) {
        next(error) // Pass the error to the error handling middleware
    }
}

const getOrders = async (req, res, next ) => {
    try {
        const orders = await Order.find(); // Find all orders
        res.status(200).json({data : orders}) // Send a success response with all orders
    } catch (error) {
        next(error) // Pass the error to the error handling middleware
    }
}

const updateOrder = async (req, res, next ) => {
    try {
        const { orderStatus } = req.body; // Extract orderStatus from the request body
        const order = await Order.findByIdAndUpdate(
            req.params.id, {orderStatus}, {new: true}, // Find the order by ID and update its status
        )
        if(!order){
            const error = createHttpError(404, "Order not found") // Create a 404 error if the order is not found
            return next(error) // Pass the error to the error handling middleware
        }
        res.status(200).json({succes : true, message : "Order updated successfully", data : order}) // Send a success response with the updated order
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
}

export {addOrder, getOrderById, getOrders, updateOrder}; // Export the controller functions
