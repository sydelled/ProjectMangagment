import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar";
import Project from "./components/Project/Project";
import { useState } from 'react';

function App() {
   
  const [ clickButton, setClickButton ] = useState(false);
  

  const handleChange = () => {
     
          setClickButton(true);
  };
  
  //cancels new project click
  const handleCancel = () => {
    setClickButton(false);
  }
 
  
  return (
    <div className="grid grid-cols-5 gap-8">
      <SideBar handleChange={handleChange} />
      {clickButton ? (
        <Project clickButton={handleCancel} />
      ) : (
        <Header clickButton={handleChange} />
      )}
    </div>
  );
};

export default App;
