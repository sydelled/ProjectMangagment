import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar";
import Project from "./components/Project/Project";
import NoPage from "./components/NoPage/NoPage";
import Task from "./components/Task/Task";
import { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
   
  //initial empty array
  const [updatedObject, setUpdatedObject] = useState([]);
  const [displayTask, setDisplayTask] = useState({});
 

  // Callback function to receive the updated object from Project component
  const handleObjectUpdate = (updatedObj) => {
    // Appending the new object to the existing array
    //creating an array of objects over multiple updates
    //updates previous empty array with new updated array by spread operator
    setUpdatedObject(prevState => [...prevState, updatedObj]); 
    setDisplayTask(updatedObj);
    
  };

  console.log('app', updatedObject);
  
    
  return (

    <>
  <div className="grid grid-cols-5 gap-8">
    <SideBar newProject={updatedObject}/>
    
    <Routes>
      {/* main page */}
      <Route path="/" element={<Header />} />
      <Route path="/project" element={<Project objectUpdate={handleObjectUpdate} />} />
      <Route path="/task/:title" element={<Task value={displayTask} />} />
      <Route path="*" element={<NoPage />} />
    </Routes>

       </div>
    </>


  );
};

export default App;
