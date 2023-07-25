import { useEffect, useRef, useState } from "react"

export default function TodoList () {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        return JSON.parse(localStorage.getItem('jobs')) ?? []
    })
    const jobRef = useRef(null)

    useEffect(() => {
        if(jobRef.current) {
            jobRef.current.focus()
        }
    }, [job])


    const handleSubmit = () => {
        setJobs((prev) => {
            const localStorageSave = [...prev, job]
            JSON.stringify(localStorageSave)
            localStorage.setItem('jobs',JSON.stringify(localStorageSave))
            return localStorageSave
        })
        setJob('')
    }

    const handleDeleteJob = (indexJob) => {
        const findJob = jobs.filter((_, index) => index !== indexJob)
        setJobs(() => {
            localStorage.setItem('jobs',JSON.stringify(findJob))
            return findJob
        })
    }

    const handleDeleteAll = () => {
        setJobs(() => {
            localStorage.setItem('jobs',JSON.stringify([]))
            return []
        })
    }

    return (
        <div>
            <input
                type="text" 
                value={job}
                ref={jobRef}
                onChange={(e) => setJob(e.target.value)} 
                placeholder="Please, enter job here!"
            />
            <button onClick={handleSubmit}>Add</button>
            <button onClick={handleDeleteAll}>Delete All</button>

            <ul>
                { jobs.map((job, index) => {
                    return (
                        <li key={index} style={{margin: "5px"}}> 
                            <button onClick={() => handleDeleteJob(index)} style={{marginRight: "10px"}}>x</button>
                            {job} 
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}