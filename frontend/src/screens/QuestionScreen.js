import React from 'react';
import { Row } from 'react-bootstrap';
import Question from '../components/Question';
import axios from 'axios'
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listExamDetails}  from '../actions/examActions.js'
import Loader from '../components/Loader';
import Message from '../components/Message';
const QuestionScreen = ({match}) => {

    //useEffect (()=> {
       // const fetchQuestions = async () => {
         //   const {data } = await axios.get (`http://localhost:5000/exam/${match.params.id}/questions`)       
         //   setQuestions (data)}
       //     fetchQuestions()
       console.log('id' + match.params.id);
     
       const dispatch = useDispatch ()
       console.log('exam aft' );

       const examDetails = useSelector (state => state.examDetails)
      
       console.log('exam 1' );

       const { loading, error, exam }  = examDetails
       console.log('exam 2' );

       useEffect (()=> {
           console.log('id' + match.params.id);
           dispatch (listExamDetails(match.params.id))
         
        }, [dispatch, match])
 //   var questions =  [ ... (exams.find((ex) => ex._id === parseInt( match.params.id))).questions]
   
   // questions.map ( q  => {
   //     console.log(q.text);
    //})
    
    return (
       <>
        {
             loading ? <Loader></Loader> :
                error ? <Message variant='red'>{error}</Message> : 
                <>
                 <div class="card text-center mb-3" >
                  <div class="card-header"> <strong> {exam.provider} {exam.name}</strong></div>
                  <div class="card-body text-primary">
                    <h5 class="card-title"> {exam.questions.length} questions</h5>
                    </div>
                </div>
                  {  
                 
                
                  exam.questions.map ((qs) =>  {
                    return             <Question question = {qs}></Question>
                })
            }
            </>
}       

        </>  
        )
    
        
};

export default QuestionScreen;