import { useNavigate } from 'react-router-dom';

export function AlertDeleteProject( {  open, onClose, deleteProject, projectObject} ) {


    const navigate = useNavigate();
    
    const handleDeleteProject = async () => {
        
        try {
            const deletionResult = await deleteProject(projectObject.Title);
            console.log('result', typeof(projectObject))

            console.log(deletionResult);
            onClose();
            // Navigate after successful deletion
            navigate('/');
          } catch (error) {
            //if the deletion fails
            console.error('Deletion failed:', error);
          }
        };

        console.log('open', open)
    return(
        <>
        {open && (
        <dialog open={open}>
        <p>Are you sure you want to delete this project?</p>
        
        <button onClick={handleDeleteProject}>Yes</button>
        <button onClick={onClose}>No</button>
        </dialog>
        )}
        </>

    );
};