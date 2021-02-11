import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { listExamDetails}  from '../actions/examActions.js'
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

const ExamScreen = ({ match }) => {
    

 //   useEffect (()=> {
     //   const fetchExam = async () => {
       //     const {data } = await axios.get (`http://localhost:5000/exam/${match.params.id}`)       
         //   setExam (data)}
          //  fetchExam()
          const dispatch = useDispatch ()

          const examDetails = useSelector (state => state.examDetails)
          const { loading, error, exam }  = examDetails
      
          useEffect (()=> {
              dispatch (listExamDetails(match.params.id))
        }, [dispatch, match])

  
    return (
        <>
            <Link  to={'/'} className='btn btn-light m-3'>
                Go Back 
            </Link>
            <Link to={`/exam/${exam._id}/questions`} className='btn btn-light my-3'> 
                    View the questions
                    </Link>
                    {
                loading ? <Loader></Loader> :
                error ? <Message variant='red'>{error}</Message> : 
            <Row>
                <Col md={6}>
                    <Image className='img' src={`/${exam.img}`}>

                    </Image>

                   
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                         {exam.provider}
                        </ListGroup.Item>
                        <ListGroup.Item>
                        {exam.name}
                        </ListGroup.Item>
                        <ListGroup.Item>
                        {exam.title}
                        </ListGroup.Item>
                      
                        <ListGroup.Item>
                         {exam.nb_questions} questions
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

            </Row>
}
        </>
    );
};

export default ExamScreen;