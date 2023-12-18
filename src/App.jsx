import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar";
import Project from "./components/Project/Project";
import { useState } from 'react';

function App() {
   
  const [ clickButton, setClickButton ] = useState(false);

  const handleChange = () => {
     
          setClickButton(true);
  };
  
  return (
    <>
  
    <SideBar handleChange={handleChange} />
    
    {clickButton ? ( <Project />
    ) : (
    <Header clickButton={clickButton} handleChange={handleChange} />)};
   
  
    </>
    
  );
};

export default App;
