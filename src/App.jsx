import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar";
import Project from "./components/Project/Project";
import NoPage from "./components/NoPage/NoPage";
import Task from "./components/Task/Task";
import { AlertDeleteProject } from "./components/AlertDeleteProject/AlertDeleteProject";





import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
   
  //initial empty array
  const [updatedObject, setUpdatedObject] = useState([]);
 
  const [openModals, setOpenModals] = useState({});

  const handleOpenModal = () => {
    setOpenModals(true);
  };

  const handleCloseModal = () => {
    setOpenModals(false);
  };

  // Callback function to receive the updated object from Project component
  const handleObjectUpdate = (updatedObj) => {
    //creating an array of objects over multiple updates
    //updates previous empty array with new updated array by spread operator
    setUpdatedObject(prevState => [...prevState, updatedObj]); 
   
  };

  const handleDeleteProject = (project) => {
    return new Promise((resolve) => {
      
      
        // // Create a copy of updatedObject
        // const updatedObjectCopy = [...updatedObject];
    
        // // Filter out the object to be deleted
        // const updatedObjectFiltered = updatedObjectCopy.filter(obj => obj.Title !== project[index]);
    
        // Simulate deletion with a delay
        setTimeout(() => {
          // Update the state with the modified copy
          
          setUpdatedObject((prevProjects) => prevProjects.filter((_, i) => i !== ind));
    
          // Resolve after successful deletion
          resolve(`Project with Title ${project.Title} deleted`);
        }, 1000); // Simulated delay of 1 second
      });
    };
  
  
  return (


    <div className="grid grid-cols-5 gap-8">
    <SideBar newProject={updatedObject} />
  
    <Routes>
      {/* main page */}
      <Route path="/" element={<Header />} />
      <Route path="/project" element={<Project objectUpdate={handleObjectUpdate} />} />
  
      {updatedObject.map((object, index) => (
        <Route
          key={`route_${index}`} // Ensure a unique key for each Route
          path={`/task/${object.Title}`} // title is unique and used in the URL
          element={
            <Task
              title={object.Title}
              date={object.Date}
              description={object.Description}
              projectObject={object}
              handleOpenModal={handleOpenModal}
            />
          }
        />
      ))}
  
      {/* Fallback route */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  
    {/* Render AlertDeleteProject */}
    
    {updatedObject.map((object, index) => (
      <AlertDeleteProject
        key={index}
        open={openModals}
        onClose={handleCloseModal}
        deleteProject={() => handleDeleteProject(object, index)}
        projectObject={object}
        
      />
    ))}
    
  </div>
  );
};

export default App;
