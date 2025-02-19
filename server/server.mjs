import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./src/config/database.js"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8000;

connectDB();

app.get("/", (req, res) => {
    res.status(200).send({msg: "Welcome to the Pos Backend"})
})


app.listen(PORT, () => console.log(`POS Server is listening on port ${PORT}`));