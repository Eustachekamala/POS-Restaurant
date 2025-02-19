import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./src/config/database.mjs"
import config from './src/config/config.mjs';
import globalErrorHandler from './src/middlewares/globalErrorHandler.mjs';
import userRoute from "./src/routes/userRoute.mjs"


dotenv.config();

const app = express()
const PORT = config.port;

//Connexion to the Database
connectDB();


//Middlewares
app.use(express.json()); //parse incoming request in json format

//Root endpoint
app.get("/", (req, res) => {
    res.status(200).send({msg: "Welcome to the Pos Backend"})
})

//Other Endpoints
app.use("/api/user", userRoute)

//Global error handler
app.use(globalErrorHandler);



app.listen(PORT, () => console.log(`POS Server is listening on port ${PORT}`));