export default function SideBar({ handleChange }){
    return(
        
        <aside className="bg-black h-screen">
        
           <div className="flex flex-col justify-center space-y-5 pt-10">
            <p className="text-white text-center font-bold uppercase">Your Projects</p>
            <p>
            <button className='bg-gray-500/75 hover:bg-gray-700/75 text-white font-bold py-2 px-4 rounded mx-auto block' onClick={handleChange}>+ Add Project</button>
            </p>
            </div>
            
        </aside>
       
        
        
      
    );
};