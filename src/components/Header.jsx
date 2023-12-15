import img from '../assets/no-projects.png'
export default function Header(){
    
    const projectText = 'No project selected'

    return(
        <header>
            <img src={img} alt="notebook" className='w-40 h-40 mx-auto'></img>
            <h1 className="my-8 text-center text-5xl font-bold">{projectText}</h1>
            

        </header>
    );
};