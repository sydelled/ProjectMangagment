import { useState } from 'react';
import { useNavigate } from "react-router-dom";




export default function Project ( {clickButton}){

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

<>
       {cancel ? (
  <Header clickButton={clickButton}/>
) : (
  <div className='col-span-4'>
    <div className="grid grid-rows-4 gap-10">
      <div className='flex float-right justify-end items-center pt-10 space-x-4 pr-10'> 
        <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold p-5 py-3 px-6 rounded-lg' onClick={clickButton}>Cancel</button>
        <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold py-3 px-6 rounded-lg' onClick={handleSave}>Save</button>
      </div>
      <div>
        <label className='uppercase text-brown-600 font-bold'>Title:<p><input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4  w-3/4" type="text" name="Title" value={newProject.Title} onChange={handleChange}></input></p></label>
      </div>
      <div>
        <label className='uppercase text-brown-600 font-bold'>Description: <p><input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4  w-3/4 h-4/5" type="text" name="Description" value={newProject.Description} onChange={handleChange}></input></p></label>
      </div>
      <div>
        <label className='uppercase text-brown-600 font-bold'>Due Date: <p><input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4 w-3/4" type="date" name="Date" value={newProject.Date} onChange={handleChange}></input></p></label>
      </div>
    </div>
  </div>
)};
</>
   
    );
};


 {/* {cancel ? ( <Header clickButton={clickButton}/>
    ) : (
        <div className='col-span-4'>
         <div className="grid grid-rows-4 gap-10">
    
            
            
            <div className='flex float-right justify-end items-center pt-10 space-x-4 pr-10'> 
            
                <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold p-5 py-3 px-6 rounded-lg' onClick={handleCancel}>Cancel</button>
            
                <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold py-3 px-6 rounded-lg' onClick={handleSave}>Save</button>
                
            </div>
        
         
          <div>
            <label className='uppercase text-brown-600 font-bold'>Title:<p><input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4  w-3/4" type="text" name="Title" value={newProject.Title} onChange={handleChange}></input></p></label>
            
          </div>
          <div>
            <label className='uppercase text-brown-600 font-bold'>Description: <p><input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4  w-3/4 h-4/5" type="text" name="Description" value={newProject.Description} onChange={handleChange}></input></p></label>
            
          </div>
          <div>
            <label className='uppercase text-brown-600 font-bold'>Due Date: <p><input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4 w-3/4" type="date" name="Date" value={newProject.Date} onChange={handleChange}></input></p></label>
            
          </div>
      
        </div>
      </div>
    
    )}; */}


     //     <div className='col-span-4'>
    //     <div className="grid grid-rows-4 gap-10">
   
           
           
    //        <div className='flex float-right justify-end items-center pt-10 space-x-4 pr-10'> 
           
    //            <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold p-5 py-3 px-6 rounded-lg' onClick={handleCancel}>Cancel</button>
           
    //            <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold py-3 px-6 rounded-lg' onClick={handleSave}>Save</button>
               
    //        </div>
       
        
    //      <div>
    //        <label className='uppercase text-brown-600 font-bold'>Title:<p><input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4  w-3/4" type="text" name="Title" value={newProject.Title} onChange={handleChange}></input></p></label>
           
    //      </div>
    //      <div>
    //        <label className='uppercase text-brown-600 font-bold'>Description: <p><input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4  w-3/4 h-4/5" type="text" name="Description" value={newProject.Description} onChange={handleChange}></input></p></label>
           
    //      </div>
    //      <div>
    //        <label className='uppercase text-brown-600 font-bold'>Due Date: <p><input className="bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4 w-3/4" type="date" name="Date" value={newProject.Date} onChange={handleChange}></input></p></label>
           
    //      </div>
     
    //    </div>
    //  </div>
        