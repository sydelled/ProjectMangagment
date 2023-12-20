




export default function Task ( { newProject }){


    console.log('task', newProject)
    return (
        <>
        <div className='col-span-4'>
        <div className="grid grid-rows-4 gap-10">

        <p>{newProject.Title}</p>
        <p>{newProject.Date}</p>
        <p>{newProject.Description}</p>



        </div>
        </div>
        
        
        
        </>
    );
};