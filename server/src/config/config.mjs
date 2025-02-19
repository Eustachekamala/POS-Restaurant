import dotenv from 'dotenv';

dotenv.config();

const config = Object.freeze({
    port: process.env.PORT || 8000,
    databaseURI: process.env.MONGODB_URI || "mongodb://localhost:27017",
    nodeEnv : process.env.NODE_ENV || "development"
});

export default config;