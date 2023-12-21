import { Link } from 'react-router-dom';



export default function NoPage (){
    return(
        
        <div className='col-span-4'>
        
        <p className="pt-10">Page doesn't exist. Go back to <Link className= 'hover:text-gray-400' to='/'>home.</Link></p>
        
        </div>
    );
};