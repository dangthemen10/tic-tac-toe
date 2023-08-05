import {SET_JOB, ADD_JOB, DELETE_JOB } from "./constants";

const initialState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {

    let newState

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;

        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw new Error('Invalid Actionnn');
    }
    return newState
}

export { initialState }
export default reducer