import mongoose from 'mongoose'

const answerSchema = mongoose.Schema (
    {
        answer_num : String,
        text : String
    }
) 

const questionSchema = mongoose.Schema (
    {
        text : String,
        answers : [answerSchema]
    }
) 

const examSchema = mongoose.Schema ({
    
  
    provider : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    title: {
        type : String,
    },
    questions : [ questionSchema    ]

}
    ,{
        timestamps : true
})
const Exam = mongoose.model('Exam' , examSchema)
export default Exam