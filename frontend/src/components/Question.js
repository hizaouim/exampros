import React, { useState } from 'react';
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CommentsScreen from '../screens/CommentsScreen'

const Question = ({ question    }) => {

    const [Modalshow, setModalshow] = useState(false)
    const [show, setShow] = useState (0)
    const handleClick = () => {
        console.log('handle');
      setShow(!show)

       console.log(!show);
    
    }


    const handleShow = () => {
        setModalshow (true);
    }

    const handleClose = () => {
        setModalshow (false);
    }
     
    return (
        <>
      
      <CommentsScreen Modalshow={Modalshow} handleClose={handleClose} ></CommentsScreen>

        
       
                    <div class="card m-2"  >
                    <div class="card-header">
                    {question.num} - {question.text}
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>

    {question.answers.map (( answer)=>
                {   return(
                    <>
                  
                       <ListGroup id="lg" variant='flush'>
                      
                    <ListGroup.Item className={answer.correct && show ? "active" : ""}  >
                    {answer.answer_num} - {answer.text} 
                    </ListGroup.Item>
                    </ListGroup>
                   
                   </>
                   )
                }
                 )}
    <Button  className='btn btn-info m-1 ' onClick={handleClick}> 
                    { show ?  'Hide answers' : 'Show answers' }
                    </Button>
                    
                    <Button  className='btn btn-info m-1 ' onClick={handleShow} > 
                     Show comments
                    </Button>
  </div>
</div>
        </>
    );
};

export default Question;