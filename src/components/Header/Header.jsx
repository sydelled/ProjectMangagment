import img from '../../assets/no-projects.png';
// import Project from "../Project/Project"
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header(){

    const projectText = 'No project selected'

   const navigate = useNavigate();


   

    return(
        <>
        <header className='col-span-4 justify-center pt-10'>
        <img src={img} alt="notebook" className='w-40 h-40 mx-auto block'></img>
        
        <h1 className="my-8 text-3xl font-bold text-center">{projectText}</h1>

            
        <p className="my-8 text-center text-1xl">Select a project or start a new project by clicking button below.</p>
                    
        <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold py-2 px-4 rounded mx-auto block' onClick={() => navigate('/project')}>Create New Project</button>
           
        </header>
        </>
       
    );
};