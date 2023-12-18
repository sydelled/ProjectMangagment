import img from '../../assets/no-projects.png';
import Project from "../Project/Project"
import { useState } from 'react';

export default function Header({ clickButton, handleChange }){

    const projectText = 'No project selected'

   

   

    return(
        <>
        {/* {clickButton && <Project />} */}

        <div className="flex h-screen justify-center">
        <header className='flex-col items-center justify-center'>
        <img src={img} alt="notebook" className='w-40 h-40 mx-auto block'></img>
        
        <h1 className="my-8 text-3xl font-bold text-center">{projectText}</h1>

            
        <p className="my-8 text-center text-1xl">Select a project or start a new project by clicking button below.</p>
                    
        <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold py-2 px-4 rounded mx-auto block' onClick={handleChange}>Create New Project</button>
           
        </header>
        </div>
        </>
       
    );
};