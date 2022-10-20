import React from 'react'
import {useState} from 'react'



const TaskForm = () => {

    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
    }

  return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Write your task' onChange={(e) => setTitle(e.target.value)}/>
            <button>Save</button>
        </form>
  )
}

export default TaskForm