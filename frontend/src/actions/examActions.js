import axios from 'axios'
import { EXAM_LIST_REQUEST, EXAM_LIST_SUCCESS, EXAM_LIST_FAIL, EXAM_DETAILS_SUCCESS, EXAM_DETAILS_FAIL, EXAM_DETAILS_REQUEST} from '../constants/examConstants.js'


export const listExams = () => async (dispatch ) => {
    try {
        dispatch ({ type: EXAM_LIST_REQUEST})
        const { data } = await axios.get('http://localhost:5000/api/exams') 
        dispatch ({
            type : EXAM_LIST_SUCCESS,
            payload : data
        })
    }
     catch (error) {
                dispatch ({
                    type : EXAM_LIST_FAIL,
                    payload : error.response && error.response.data.message ? 
                    error.response.data.message : error.message
                })
    }
}


export const listExamDetails = (id) => async (dispatch ) => {
    try {
        dispatch ({ type: EXAM_DETAILS_REQUEST  })
        const { data } = await axios.get(`http://localhost:5000/api/exams/${id}`) 
        dispatch ({
            type : EXAM_DETAILS_SUCCESS,
            payload : data
        })
    }
     catch (error) {
                dispatch ({
                    type : EXAM_DETAILS_FAIL,
                    payload : error.response && error.response.data.message ? 
                    error.response.data.message : error.message
                })
    }
}