// import React from 'react'
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [title, setTask] = useState('')
    const [day, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

   const onSubmit =(e) => {
        e.preventDefault()
        if(!title){
            alert('Please add a task')
            return
        }
        onAdd({title, day, reminder})
        setTask('')
        setDate('')
        setReminder(false)

    }
    return (
        <form action="" className="add-from" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">
                    Task
                </label>

                <input type="text" value={title} placeholder='Add Task' onChange={(e) =>
                    setTask(e.target.value)
                } />
            </div>
            <div className="form-control">
                <label htmlFor="">
                    Date & Time
                </label>

                <input type="text" value={day} placeholder='Add Day & Time' onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-control for m-control-check">
                <label htmlFor="">
                    Set Riminder
                </label>

                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value='Save Task' className='btn btn-block' />

        </form>
    )
}

export default AddTask