import React, { Fragment, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const QuestionFormScreen = () => {
    const [inputFields, setInputFields] = useState([
        { text: '' }
      ]);
    //console.log( '0' );
    const examList = useSelector (state => state.examList)

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
      };
    
      const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "firstName") {
          values[index].firstName = event.target.value;
        } else {
          values[index].lastName = event.target.value;
        }
    
        setInputFields(values);
      };
    
      
    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ text: '' });
        setInputFields(values);
      };

   // console.log( '0.5' + examList);
   console.log(typeof(examList.exams));
   let options = examList.exams;
   //console.log( '1' );
    useEffect (() => {
        console.log(JSON.stringify(examList));
        console.log(JSON.stringify(examList.exams));
        
        console.log( 'list' + examList.exams);
       
     
    })
       

    
    return (
            <Form>
                 <Form.Group controlId="formGroupEmail">
                    <Form.Label>Exam</Form.Label>
                    <Form.Control as="select">
                  
                   
                  
                        {
                         
                    options.map((option) => (
              <option value={option.name}>{option.name}</option>
            ))
            }
                    
                  
                </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="email" placeholder="Enter question text" />
                   
                </Form.Group>

                {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
                <Form.Group controlId="formGroupPassword">
                   
                    <Form.Control type="text" placeholder="answer" />
                    <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
                </Form.Group>

             
            
            </Fragment>
          ))}

                
                <Button className= 'm-1' variant="primary" type="submit">
    Submit
  </Button>
 
            </Form>
    );
};

export default QuestionFormScreen;