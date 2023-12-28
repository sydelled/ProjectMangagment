




export default function Task ( { value }){


    return (


        <div className='col-span-4'>
        <div className="grid grid-rows-4 gap-10">

       
        <div className='p-3'>
            <p>Title: {value.Title}</p>
            <p>Date: {value.Date}</p>
            <p>Description: {value.Description}</p> 
                     
        </div>

               

        </div>
        </div>
        
        
        
        
    );
};