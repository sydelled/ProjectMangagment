import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar";
import Project from "./components/Project/Project";
import NoPage from "./components/NoPage/NoPage";
import Task from "./components/Task/Task";
import React from 'react';



import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
   
  const navigate = useNavigate();
  //initial empty array
  const [updatedObject, setUpdatedObject] = useState([]);

  const handleProjectUpdate = (updatedObjData) => {
    const newProject = {
      ...updatedObjData,
      id: Math.random()
    };
  
    setUpdatedObject((prevState) => [...prevState, newProject]);
  };

  
  const handleDeleteProject = (projectID) => {
    setUpdatedObject((prevState) => [
      ...prevState.filter((project) => project.id !== projectID)
    ]);
    navigate('/')
  };
  

  console.log('app', updatedObject)
 
  return (


    <div className="grid grid-cols-5 gap-8">
    <SideBar 
    updatedProject={updatedObject}
     />
  
    <Routes>
      {/* main page */}
      <Route path="/" element={<Header />} />
      
      <Route 
      path="/project" 
      element={
      <Project 
      handleProjectUpdate={handleProjectUpdate} />} />
  
      
       {updatedObject.map((project) => (
        <Route
          key={project.id} // Ensure a unique key for each Route
          path={`/task/${project.Title}`} // title is unique and used in the URL
          element={
            <Task
              project={project}
              onDelete = {handleDeleteProject}
            />
          }
        />
      ))} 
      
  
      {/* Fallback route */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  
  </div>
  );
};


export default App;