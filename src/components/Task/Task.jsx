

import { useState } from 'react';


export default function Task ( { value }){

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleChange = (event) => {
        setTaskInput(event.target.value);
    };

    const addTask = () => {
        setTasks((prevTasks) => [...prevTasks, taskInput]);
        setTaskInput(''); // Reset input field after adding task
    };





    return (


        <div className='col-span-4'>
        <div className="grid grid-rows-4 gap-10">

       
        <div className='p-3'>
            <p>Title: {value.Title}</p>
            <p>Date: {value.Date}</p>
            <p>Description: {value.Description}</p> 
                     
        </div>
        <hr className="solid"></hr>
        <h1>Tasks</h1>
        <p>
            <input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4  w-3/4" type="text" name="" value={tasks} onChange={handleChange}></input>
            <button className="pl-10" onClick={addTask}>Add Task</button>
        </p>

        {tasks.map((taskValue, index) => (
            <div className="flex flex-col bg-tan-100/40 px-4 py-2 rounded-md w-3/4 h-2/4" key={index}>
                <p>{taskValue}</p>
            </div>
            ))}

     
       

               

        </div>
        </div>
        
        
        
        
    );
};