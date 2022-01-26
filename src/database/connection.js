import mongoose from "mongoose"

export default mongoose.connect(
    process.env.DB_CONNECT,
    error => error ? console.error("Database connection error: " + error) : console.log("Connected to database!")
)