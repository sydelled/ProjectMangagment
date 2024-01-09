import { useNavigate, Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';



export default function SideBar( { updatedProject }){

    const navigate = useNavigate();

   console.log('sidebar', updatedProject)
    
    return(
        
        <aside className="bg-black min-h-screen">
        
           <div className="flex flex-col justify-center space-y-5 p-10 ">
                <h3 className="text-white text-center font-bold uppercase">Your Projects</h3>
                
            <Button onClick={() => navigate('/project')}>+ Add Project</Button>
               
                <ul>
                {updatedProject.map((project) => (
                <li className='text-white text-center font-bold uppercase hover:bg-gray-700/75 p-3' key={project.id}>
                    <Link to={`/task/${project.Title}`}>
                        {project.Title}
                    </Link>
                </li>

                ))}
                
                </ul>
                </div>
            
        </aside>
       
        
        
      
    );
};