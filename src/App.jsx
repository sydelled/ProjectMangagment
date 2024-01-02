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
  
  // Callback function to receive the updated object from Project component
  const handleObjectUpdate = (updatedObj) => {
    //creating an array of objects over multiple updates
    //updates previous empty array with new updated array by spread operator
    setUpdatedObject(prevState => [...prevState, updatedObj]); 
   
  };

  const deleteProject = (project) => {
    return new Promise((resolve) => {
      const updateProjectObj = updatedObject.filter(obj => obj.Title !== project);
      setUpdatedObject(updateProjectObj);
      setTimeout(() => {
        // Assuming the deletion was successful
        resolve(`Project with ID ${project} deleted`);
      }, 1000); // Simulated delay of 1 second
    });
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

      {updatedObject.map((object, index) => (
        <Route
          key={index} // Ensure a unique key for each Route
          path={`/task/${object.Title}`} // title is unique and used in the URL
          element={
            <Task
              title={object.Title}
              date={object.Date}
              description={object.Description}
              projectObject={object}
              deleteProject={deleteProject}
            />
          }
        />
      ))}

      <Route path="*" element={<NoPage />} />
    </Routes>

       </div>
    </>


  );
};

export default App;
