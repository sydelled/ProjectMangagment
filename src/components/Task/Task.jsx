
import { useState, useEffect, useRef } from 'react';

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function Task ( { project, onDelete }){

    const modal = useRef();
    
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const [ disable, setDisable ] = useState(false);
    const [ active, setActive ] = useState({ [project.Title] : false} );
   
    const formattedDate = new Date(project.DueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const handleChange = (event) => {
        setTaskInput(event.target.value);
    };

    const addTask = () => {
        const newTask = { task: taskInput, projectTitle: project.Title }; // Associate task with projectTitle
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTaskInput(''); // Reset input field after adding task
        setActive({...active, [project.Title] : true} );
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
    const projectTasks = tasks.filter((task) => task.projectTitle === project.Title);

    const isActive = active[project.Title] || false;

    return (
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2>Delete Project?</h2>
            <p>Would you like to delete this project?</p>
          </Modal>
        

        <div className='col-span-4'>
        <div className="grid grid-flow-row auto-rows-max p-10">

       
        <div className='flex flex-col pt-10 pb-20'>
        
        
        
        <div className='flex flex-row justify-between pb-10'>
            <h1 className='text-brown-600 text-3xl uppercase font-serif font-bold'>{project.Title}</h1>
            <button className="hover:text-gray-400 pr-20 font" onClick={() => onDelete(project.id)}>Delete</button>
        </div>
       

        <h2 className='pt-2 text-gray-500 font-mono text-lg'>{formattedDate}</h2>
        <p className='pt-10 font-mono text-lg'>{project.Description}</p> 
                     
        </div>

        <div><hr className="solid"></hr></div>


        <div className='flex flex-col pt-10 p-5 pb-20'>
        
            <h3 className='text-brown-600 text-2xl uppercase font-serif font-bold pb-10'>Tasks</h3>

            
            <div className='flex flex-row justify-between pb-10'>
            
                <input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4 w-3/4" type="text" value={taskInput} onChange={handleChange}></input>
                <Button onClick={addTask} disabled={disable}>Add Task</Button>
            </div>

            
            
            {isActive ? (
            
            <section className='bg-tan-100/40 px-4 py-2 rounded-md w-3/4'>
            {projectTasks.map((taskValue, index) => (
                
                    <div className="flex flex-row justify-between p-5" key={index}>
                    
                        {taskValue.task}
                        <Button onClick={() => handleClear(index)}>Clear</Button>
                    
                    
                    </div>))}

            </section>
            ) : (
                <p className='font-mono'>Please enter tasks above.</p>
            )}
            </div>

        </div>
        </div>
        </>
    );
};