import React from 'react'
import {tasks as data} from './tasks.js';
import {useState, useEffect} from 'react';




const TaskList = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])
    

    if(tasks.length === 0 ) return <h1>Dont tasks yet</h1>
    return (
        <div>
            {
                tasks.map(task => (<div>
                    <div key={task.id}>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                    </div>
                </div>))
            }
        </div>
    )
}

export default TaskList