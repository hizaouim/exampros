import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import exams from './data/exams.js'
import cors from 'cors'
import examRoutes from './routes/examRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())

app.use ('/api/exams', examRoutes) 
 
app.get ('/', (req, res) => {
    res.send('API is running .... ' )
})



app.get ('/exam/:id/questions', (req, res) => {
    const exam = exams.find ( exam => exam._id === parseInt (req.params.id) )
    res.json(exam.questions)
})

const port = process.env.PORT || 5000
app.listen (port, console.log(`server is running on port ${port}`))