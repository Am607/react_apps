import React from 'react'
import Task from './Task'
import { useState } from 'react'  //! state and stateHook

const Tasks = ({ tasks, onDelete ,  onToggle}) => {
    return (
        <>
            {tasks.map((t) => 
            <Task key={t.id} task={t} onDelete={onDelete}  onToggle = {onToggle} />)}
        </>
    )
}

export default Tasks 