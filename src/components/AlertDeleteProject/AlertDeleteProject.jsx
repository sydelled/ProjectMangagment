import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function AlertDeleteProject( {  open, onClose, projectObject} ) {

  const navigate = useNavigate();

    
    const handleDeleteProject = async () => {
        
        try {
            const deletionResult = await deleteProject(projectObject, index);
            console.log('result', projectObject.Title)

            console.log(deletionResult);
            onClose();
            // Navigate after successful deletion
            navigate('/');
          } catch (error) {
            //if the deletion fails
            console.error('Deletion failed:', error);
          }
        };

    
    return(
        <>
        {open && (
        <dialog open={open}>
        <p>Are you sure you want to delete this project?</p>
        
        <button onClick={handleConfirmDeletion}>Yes</button>
        <button onClick={onClose}>No</button>
        </dialog>
        )}
        </>

    );
};