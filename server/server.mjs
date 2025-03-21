import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./src/config/database.mjs"
import config from './src/config/config.mjs';
import globalErrorHandler from './src/middlewares/globalErrorHandler.mjs';
import userRoute from "./src/routes/userRoute.mjs"
import orderRouter from "./src/routes/orderRoute.mjs";
import tableRouter from "./src/routes/tableRouter.mjs";
import paymentRouter from "./src/routes/paymentRoute.mjs"
import cookieParser from 'cookie-parser';
import cors from "cors"


dotenv.config();

const app = express()
const PORT = config.port;

//Connexion to the Database
connectDB();


//Middlewares
app.use(cors({
    credentials : true,
    origin: ['https://pos-restaurant-xi.vercel.app']
}))
app.use(express.json());
app.use(cookieParser());

//Root endpoint
app.get("/", (req, res) => {
    res.status(200).send({msg: "Welcome to the Pos Backend"})
})

//Other Endpoints
app.use("/api/user", userRoute);
app.use("/api/order", orderRouter);
app.use("/api/table", tableRouter);
app.use("/api/payment", paymentRouter);

//Global error handler
app.use(globalErrorHandler);



app.listen(PORT, () => console.log(`POS Server is listening on port ${PORT}`));