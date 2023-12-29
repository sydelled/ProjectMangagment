

import { useState, useEffect } from 'react';


export default function Task ( { value }){

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [ disable, setDisable ] = useState(false);
    const [ active, setActive ] = useState(false);

    const handleChange = (event) => {
        setTaskInput(event.target.value);
    };

    const addTask = () => {
        setTasks((prevTasks) => [...prevTasks, taskInput]);
        setTaskInput(''); // Reset input field after adding task
        setActive(true);
    };

    const handleClear = (index) => {
        //filters out previous index
        //checks if previous index is not equal to current index and filters it out
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));

    };

    useEffect(() => {
       // Check if taskInput is empty
    if (taskInput === '') {
        setDisable(true);
    } else {
        setDisable(false);
    }
}, [taskInput]);
        
    console.log('tasks', tasks)

    return (


        <div className='col-span-4'>
        <div className="grid grid-flow-row auto-rows-max p-10">

       
        <div className='flex flex-col pt-10 pb-20'>
            <h1 className='text-brown-600 text-3xl uppercase font-serif font-bold'>{value.Title}</h1>
            <h2 className='pt-2 text-gray-500 font-mono text-lg'>{value.Date}</h2>
            <p className='pt-10 font-mono text-lg'>{value.Description}</p> 
                     
        </div>

        <div><hr className="solid"></hr></div>


        <div className='flex flex-col pt-10 p-5 pb-20'>
        
            <h3 className='text-brown-600 text-2xl uppercase font-serif font-bold pb-10'>Tasks</h3>
       
            
            <div className='flex flex-row justify-between pb-10'>
            
                <input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4 w-3/4" type="text" value={taskInput} onChange={handleChange}></input>
                <button className="hover:text-gray-400 pr-20 font" onClick={addTask} disabled={disable}>Add Task</button>
            </div>

            
            {active ? (
            
            <section className='bg-tan-100/40 px-4 py-2 rounded-md w-3/4'>
            {tasks.map((taskValue, index) => (
                
                    <div className="flex flex-row justify-between p-5" key={index}>
                    
                        {taskValue}
                        <button className='hover:text-gray-400' onClick={() => handleClear(index)}>Clear</button>
                    
                    
                    </div>))}

            </section>
            ) : (
                <p className='font-mono'>Please enter tasks above.</p>
            )}
            </div>

        </div>
        </div>
        
        
    );
};