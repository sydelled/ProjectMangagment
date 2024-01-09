import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Modal from '../Modal/Modal';
import Input from '../Input/Input';

export default function Project ({ handleProjectUpdate }){

    const navigate = useNavigate();
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const [ disable, setDisable ] = useState(false);

    
    const handleSave = () => {
     
     //recieving the new value
     const enteredTitle = title.current.value;
     const enteredDescription = description.current.value;
     const enteredDueDate = dueDate.current.value;

     //saving new value in a new object
     const savingProject = {
      Title: enteredTitle,
      Description: enteredDescription,
      DueDate: enteredDueDate
     };

      //check if all fields are not empty
      const allFieldsFilled =
        savingProject.Title.trim() !== '' &&
        savingProject.Description.trim() !== '' &&
        savingProject.DueDate.trim() !== '';
    
      //if all fields are not empty
      if (!allFieldsFilled) {
        modal.current.open(); // Open the modal to indicate missing fields
        setDisable(true); // Disable the fields
      } else {
        setDisable(false); // Enable the fields if all fields are filled
        modal.current.open(); //show modal when project is saved
        handleProjectUpdate(savingProject); //save new object to handProjectUpdate in app component

        //clearing input fields after saving
        title.current.value = '';
        description.current.value = '';
        dueDate.current.value = '';

        //navigate back to index
        navigate('/')

       
      }
    };
        
   
    return(
      <>
      <Modal ref={modal} buttonCaption="Close" disable={disable}>
      {disable ? (
          <>
            <h2>Invalid Input</h2>
            <p>Please provide a valid value for the input field.</p>
          </>
        ) : (
          <>
            <h2>Project Saved</h2>
            <p>Your project has been saved.</p>
          </>
        )}

      </Modal>

        <div className='col-span-4'>
        <div className="grid grid-rows-4 gap-10 p-10">
           
           <div className='flex float-right justify-end items-center pt-10 space-x-4 pr-10'> 
           
               <Button onClick={() => navigate('/')}>Cancel</Button>
           
               <Button onClick={handleSave} disabled={disable}>Save</Button>
               
           </div>
        
         <div>
           <Input ref={title} label="Title" type="text" name="Title"></Input>
           
         </div>
         <div>
           <Input ref={description} label="Description" type="text" name="Description" textarea></Input>
         </div>
         <div>
           <Input ref={dueDate} label="Due Date" type="date" name="Date"></Input>
         </div>
     
       </div>
     </div>
     </>
   
    );
};


 