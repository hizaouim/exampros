import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Exam = ({exam}) => {
    return (
        <Card className='my-3 p-3 rounded text-center ' >
            <Link to={`/exam/${exam._id}`}>
            <Card.Img src={exam.img} ></Card.Img></Link>
            
            <Card.Body className='p-1'>
                    <Link to={`/exam/${exam._id}`}>
                        <Card.Title as='div'>
                            {exam.name} - {exam.title}            
                                        </Card.Title>
                    </Link>
                    
                    <Card.Text as='div'>
                        <p> {exam.provider} </p>
                    </Card.Text>
                   
               
            </Card.Body>
        </Card>
    );
};

export default Exam;