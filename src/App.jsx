import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar";
import Project from "./components/Project/Project";
import NoPage from "./components/NoPage/NoPage";
import Task from "./components/Task/Task";
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
   
   
  const [updatedObject, setUpdatedObject] = useState(null);

  // Callback function to receive the updated object from Project component
  const handleObjectUpdate = (updatedObj) => {
    setUpdatedObject(updatedObj);
  };

  console.log('app', updatedObject);
    
  return (

    <>
  <div className="grid grid-cols-5 gap-8">
    <SideBar />
    
    <Routes>
          {/* main page */}
          <Route path="/" element={<Header />} />
          <Route path="/project" element={<Project objectUpdate={handleObjectUpdate}/>} />
          <Route path="/task" element={<Task newProject={updatedObject}/>} />
          <Route path="*" element={<NoPage />} />
       </Routes>

       </div>
    </>


  );
};

export default App;
