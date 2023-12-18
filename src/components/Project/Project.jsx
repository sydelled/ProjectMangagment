import { useState } from 'react';
import Header from "../Header/Header";

export default function Project (){

    const [ newProject, setNewProject ] = useState({
        Title: '',
        Description: '', 
        Date: '',
    });

    const [ cancel, setCancel ] = useState(false);
   
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name; 
        
            setNewProject((preValue) => {
                return {
                    ...preValue,
                    [name] : value,
                };
            });
    };

    const handleSave = () => {
        setNewProject(newProject)
    };

    const handleCancel = () => {
        setCancel(false);
    };
   
    return(
       

        <div className='grid grid-rows-3 gap-4'>
       <div className="flex flex-rows justify-end">
       
        <div className="flex flex-col justify-end">
        <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold py-2 px-4 rounded mx-auto block' onClick={handleCancel}>Cancel</button>
       
        <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold py-2 px-4 rounded mx-auto block' onClick={handleSave}>Save</button>

        
        
        
            <label>Title:</label>
                <input type="text" name="Title" value={newProject.Title} onChange={handleChange}></input>
            
            <label>Description:</label>
                <input type="text" name="Description" value={newProject.Description} onChange={handleChange}></input>
            
            <label>Date: </label>
                <input type="date" name="Date" value={newProject.Date} onChange={handleChange}></input>
           
       
        </div>
        </div>
        </div>
      
        
        
    );
};