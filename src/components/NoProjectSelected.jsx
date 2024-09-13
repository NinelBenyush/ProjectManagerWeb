import img from "../assets/no-projects.png";

function NoProjectSelected({onStartAdd}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={img} alt="" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-8">
                <button onClick={onStartAdd} className="px-4 py-2 hover:bg-stone-400 hover:text-white
                 hover:text-base rounded-md transition duration-150 ease-in-out">
                    Create New Project
                </button>
            </p>
        </div>
    )
}

export default NoProjectSelected