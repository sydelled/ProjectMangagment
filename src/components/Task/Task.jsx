

import { useState, useEffect } from 'react';




export default function Task ( { title, date, description, projectObject, handleOpenModal }){

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const [ disable, setDisable ] = useState(false);
    const [ active, setActive ] = useState({ [projectObject.Title] : false} );
   
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const handleChange = (event) => {
        setTaskInput(event.target.value);
    };

    const addTask = () => {
        const newTask = { task: taskInput, projectTitle: projectObject.Title }; // Associate task with projectTitle
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTaskInput(''); // Reset input field after adding task
        setActive({...active, [projectObject.Title] : true} );
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
        
    // Filter tasks for the current projectObject
    const projectTasks = tasks.filter((task) => task.projectTitle === projectObject.Title);

    const isActive = active[projectObject.Title] || false;

    return (


        <div className='col-span-4'>
        <div className="grid grid-flow-row auto-rows-max p-10">

       
        <div className='flex flex-col pt-10 pb-20'>
        
        <div className='flex flex-row justify-between pb-10'>
            <h1 className='text-brown-600 text-3xl uppercase font-serif font-bold'>{title}</h1>
            
            <button className="hover:text-gray-400 pr-20 font" 
            onClick={handleOpenModal}>Delete</button>
            
            

            </div>
            <h2 className='pt-2 text-gray-500 font-mono text-lg'>{formattedDate}</h2>
            <p className='pt-10 font-mono text-lg'>{description}</p> 
                     
        </div>

        <div><hr className="solid"></hr></div>


        <div className='flex flex-col pt-10 p-5 pb-20'>
        
            <h3 className='text-brown-600 text-2xl uppercase font-serif font-bold pb-10'>Tasks</h3>
       
            
            <div className='flex flex-row justify-between pb-10'>
            
                <input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4 w-3/4" type="text" value={taskInput} onChange={handleChange}></input>
                <button className="hover:text-gray-400 pr-20 font" onClick={addTask} disabled={disable}>Add Task</button>
            </div>

            
            {isActive ? (
            
            <section className='bg-tan-100/40 px-4 py-2 rounded-md w-3/4'>
            {projectTasks.map((taskValue, index) => (
                
                    <div className="flex flex-row justify-between p-5" key={index}>
                    
                        {taskValue.task}
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