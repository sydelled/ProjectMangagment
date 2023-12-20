import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar";
import Project from "./components/Project/Project";
import NoPage from "./components/NoPage/NoPage";
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
   
  // const [ clickButton, setClickButton ] = useState(false);
  

  // const handleChange = () => {
     
  //         setClickButton(true);
  // };
  
  
 
  
  return (

    <>
  <div className="grid grid-cols-5 gap-8">
    <SideBar />
    
    <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NoPage />} />
       </Routes>

       </div>
    </>


  );
};

export default App;
