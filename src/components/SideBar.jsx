import { IoMdAdd  } from "react-icons/io";
import { GoPackage } from "react-icons/go";

function SideBar(){
    return (
        <>
         <div className="font-poppins antialiased">
      <div id="view" className="h-full w-screen flex flex-row">
          <div
            id="sidebar"
            className=" bg-stone-100 h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          >
            <div className="space-y-6 md:space-y-10 mt-10">
              <div id="profile" className="space-y-3 flex flex-col items-center">
                <div className="avatar placeholder">
                  <div className="bg-neutral  w-8 md:w-16 rounded-full text-neutral-content flex items-center justify-center">
                    <p className='font-bold flex items-center'>Your projects
                    <GoPackage  className="w-9 h-9 inline-block" />
                    </p>
                  </div>
                </div>
                </div>
              </div>

              <div id="menu" className="flex flex-col  mt-10 space-y-2">
                <a
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-stone-400 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                  <IoMdAdd  className="w-6 h-6 inline-block" />
                  <button> Add Project</button>
                </a>
              </div>
            </div>
          </div>
      </div>
        </>
    )
}

export default SideBar;