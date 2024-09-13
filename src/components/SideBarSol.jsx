import { IoMdAdd  } from "react-icons/io";
import {useState} from 'react';

function SideBarSol({onStartAdd, onProjects, onSelectProject, selectedProjectId}){

    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-500 text-stone-100 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
            <div >
                <button onClick={onStartAdd} className="px-4 py-2 hover:bg-stone-400 hover:text-white
                 hover:text-base rounded-md transition duration-150 ease-in-out">
                <IoMdAdd  className="w-4 h-4 inline-block" /> Add Project
                </button>
            </div>
            <ul className="mt-8">
               {onProjects.map(p => {
                let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-700";
                if(p.id === selectedProjectId){
                    cssClasses += ' bg-stone-800 text-stone-200'
                }
                else{
                    cssClasses += ' text-stone-200' //400
                }
                return (
                <li key={p.id}>
                <button onClick={() => onSelectProject(p.id)} className={cssClasses}>{p.title}</button>
               </li>)
            } )}
            </ul>
        </aside>
    )
}

export default SideBarSol;