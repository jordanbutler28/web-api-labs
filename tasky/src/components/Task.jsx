import React from 'react';

const Task = (props) => {
    
    return (
        
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>

            <p className="title">{props.title}</p>
            <p className="priority" style={{backgroundColor: props.priority === 'High' ? '#9E2B25' : props.priority === 'Medium' ? '#EA8C55' : '#A1E887'}}>{props.priority}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>

            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        </div>
    )
}


export default Task;
