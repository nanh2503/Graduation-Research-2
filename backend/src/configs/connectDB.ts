import mongoose from "mongoose";
import User from "../models/userModels";

export default async function connectDB() {
    try {
        const dbUrl = process.env.DATABASE_URL|| '';
        await mongoose.connect(dbUrl)
        console.log('Connect to MongoDB successfully')
    } catch (err) {
        console.log(err)
    }
}

// const user = new User({
//     username: 'Nganh',
//     email: 'anh@gmail.com',
//     password:'032002',
// })

// user.save()