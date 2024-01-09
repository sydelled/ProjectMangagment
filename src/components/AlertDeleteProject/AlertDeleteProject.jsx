
import { useState } from 'react';
import Button from "../Button/Button";

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
        
        <Button onClick={confirmDelete}>Yes</Button>
        <Button onClick={handleCloseModal}>No</Button>
        </dialog>
        </>
        )
        
};