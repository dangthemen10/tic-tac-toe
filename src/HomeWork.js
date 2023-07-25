import { useEffect, useReducer, useRef } from "react"

/**
 * 1. init state
 * 2. action
 * 3. reducer
 * 4. dispatch
 */

// 1. init state
const initialState = {
    job: '',
    jobs: []
}

// 2. action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload: payload
    }
}
const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload: payload
    }
}
const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload: payload
    }
}

// 3. reducer
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

export default function HomeWork () {
    // 4. dispatch
    const [state, dispatch] = useReducer(reducer, initialState)
    const inputRef = useRef(null)
    const {job, jobs} = state

    const handleAddJob = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 13) {
                handleAddJob()
            }
        };

        window.addEventListener('keypress', handleKeyPress)

        // Cleanup function
        return () => {
            window.removeEventListener('keypress', handleKeyPress)
        } 
    }, [job, jobs])

    return (
        <div style={{ padding: '0 20px'}}>
            <h3>HomeWork: </h3>
            <br/>
            <input 
                ref={inputRef}
                value={job}
                onChange={(event) => {
                    dispatch(setJob(event.target.value))
                }}
                style={{width: '250px', height: '20px'}} 
                type="text" 
                placeholder="Please, enter your homework here..." 
            />
            <button 
                onClick={handleAddJob}
                style={{marginLeft: '5px', width: '55px', height: '26px'}}
            >
                Add
            </button>
            <ul>
                {jobs && jobs.map(( job, index ) => {
                    return (
                        <li key={index}>
                            {job}
                            <span style={{marginLeft: '5px'}} onClick={() => dispatch(deleteJob(index))}>
                                &times;
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}