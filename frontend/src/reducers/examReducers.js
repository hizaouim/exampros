import { EXAM_LIST_REQUEST, EXAM_LIST_SUCCESS, EXAM_LIST_FAIL, EXAM_DETAILS_REQUEST, EXAM_DETAILS_SUCCESS, EXAM_DETAILS_FAIL} from '../constants/examConstants'

export const examListReducer =( state = { exams : []} , action) => {
    switch (action.type) {
        case EXAM_LIST_REQUEST :
            return { loading : true, exams : []}
        case EXAM_LIST_SUCCESS:
            return { loading : false, exams : action.payload}
        case EXAM_LIST_FAIL:
            return { loading : false, error : action.payload}
        default:
            return state
    }
}

export const examDetailReducer =( state = { exam : { questions : [  ] } } ,
                                  action) => {
    switch (action.type) {
        case EXAM_DETAILS_REQUEST :
            return { loading : true, ...state}
        case EXAM_DETAILS_SUCCESS:
            return { loading : false, exam : action.payload}
        case EXAM_DETAILS_FAIL:
            return { loading : false, error : action.payload}
        default:
            return state
    }
}