import express from 'express' 
const router = express.Router ()
import asyncHandler from 'express-async-handler'
import Exam from '../models/examModel.js'

router.get ('/', asyncHandler (async (req, res) => {
    const exams = await Exam.find ({})
    res.json(exams)
}))


router.get ('/:id',asyncHandler (async (req, res) => {
    const exam = await Exam.findById ( req.params.id )
    if (exam) {
    res.json(exam)
    }else {
        res.status(404).json ('not found')
    }

}))

export default router