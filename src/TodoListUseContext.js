import { useRef } from "react";
import { useStore, actions } from "./store"

export default function TodoListUseContext () {
    const inputRef = useRef(null)
    const [state, dispatch] = useStore()

    const {job, jobs} = state;

    const handleAddJob = () => {
        dispatch(actions.addJob(job))
        dispatch(actions.setJob(''))

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
                    dispatch(actions.setJob(event.target.value))
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
                            <span style={{marginLeft: '5px'}} onClick={() => dispatch(actions.deleteJob(index))}>
                                &times;
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}