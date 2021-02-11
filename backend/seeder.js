import mongoose from 'mongoose'
import dotenv from 'dotenv'
import exams from './data/exams.js'
import Exam from './models/examModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try {
       
        
        await Exam.insertMany(exams)
        console.log('data imported');
        process.exit()

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

importData()