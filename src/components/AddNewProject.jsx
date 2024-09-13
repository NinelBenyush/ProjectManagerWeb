import Input from "./Input";
import { useRef, useState } from "react";
import Modal from "./Modal";

function AddNewProject({onAdd, onCancel}){
    const modal = useRef();
   const title = useRef();
   const description = useRef();
   const date = useRef();

   function handleSave(){
      const enteredTitle = title.current.value;
      const enteredDescription = description.current.value;
      const enteredDate= date.current.value;

     if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === ''){
       modal.current.open();
       return;
     }

      const data = {
        title:enteredTitle,
        description:enteredDescription,
        date:enteredDate
      }
      onAdd(data);
   }


    return(
        <>
        <Modal ref={modal} buttonCaption="Close" > 
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops....looks like you forgot to enter a value</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-500
                     text-stone-50 hover:bg-stone-700 ">Save</button>
                    </li>
            </menu>
            <div>
                <Input type="text" label="Title" ref={title} />
                <Input label="Description" isTextArea={true} ref={description}/>
                <Input type='date' label="Due Date" ref={date} />
            </div>
        </div>
        </>
    )
}

export default AddNewProject; 