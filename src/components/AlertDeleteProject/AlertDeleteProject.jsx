
import { useState } from 'react';

export default function AlertDeleteProject( { deleteProject, projectObject} ) {

 const [openModals, setOpenModals] = useState(true);

  // const handleOpenModal = () => {
  //   setOpenModals(true);
  // };

  const handleCloseModal = () => {
    setOpenModals(false);
  };
  
    const confirmDelete = () => {
      deleteProject(projectObject.Title)
      console.log('projectTitle', projectObject.Title)
    }
    return(
        <>
       
        <dialog open={openModals}>
        <p>Are you sure you want to delete this project?</p>
        
        <button onClick={confirmDelete}>Yes</button>
        <button onClick={handleCloseModal}>No</button>
        </dialog>
        </>
        )
        
};