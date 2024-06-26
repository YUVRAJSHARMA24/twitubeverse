import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        application.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB Connection failed !!!", err)
    })





/*
import express from "express";
const app = express()

    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log(error)
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`)
            })
        }
        catch (error) {
            console.log(error)
            throw error
        }
    })()

 */