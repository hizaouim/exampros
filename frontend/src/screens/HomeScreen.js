import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Exam from '../components/Exam';
import { useDispatch, useSelector } from 'react-redux'
import  {  useEffect } from 'react';
import { listExams}  from '../actions/examActions.js'
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {

    const dispatch = useDispatch ()

    const examList = useSelector (state => state.examList)
    const { loading, error, exams }  = examList

    useEffect (()=> {
        dispatch (listExams())
      
        }, [dispatch])


    return (
        <>
            <h3>Latest Exams</h3>
            {
                loading ? <Loader></Loader> :
                error ? <Message variant='red'>{error}</Message> : 
                <Row>
                {exams.map(exam => (
                    <Col sm={12} md={6} lg={4}  >
                        <Exam exam={exam} >  </Exam>

                       
                    </Col>
                ))}
            </Row>
            }
          
        </>
    );
};

export default HomeScreen;