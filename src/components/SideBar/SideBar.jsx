import { useNavigate, Link } from 'react-router-dom';



export default function SideBar( { newProject }){

    const navigate = useNavigate();
    
    return(
        
        <aside className="bg-black min-h-screen">
        
           <div className="flex flex-col justify-center space-y-5 pt-10 ">
            <h3 className="text-white text-center font-bold uppercase">Your Projects</h3>
            <p className='pb-10'>
            <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold py-2 px-4 rounded mx-auto block' onClick={() => navigate('/project')}>+ Add Project</button>
            </p>
            
                {newProject.map((obj, index) => (
                    <div className='pt-3' key={index}>
                    <Link to={`/task/${obj.Title}`}>
                        <p className="text-white text-center font-bold uppercase hover:bg-gray-700/75 ">{obj.Title}</p>
                    </Link>
                    </div>

                ))}
                
            </div>
            
        </aside>
       
        
        
      
    );
};