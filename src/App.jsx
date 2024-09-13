import SideBar from "./components/SideBar";
import SideBarSol from "./components/SideBarSol";
import AddNewProject from "./components/AddNewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[],
  });

  function handleAddTask(text){
    setProjectsState(prevProjects => {
      const newTask = {
        text: text,
        projectId: prevProjects.selectedProjectId,
        id:Math.random()
      }
      return {
        ...prevProjects,
        tasks:[...prevProjects.tasks,newTask ]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectsState(prevProjects => {
      return {
        ...prevProjects,
        tasks:prevProjects.tasks.filter(
          (task) => task.id !== id)

      }
    })
  }

  function handleStartAddProject(){
    setProjectsState(prevProjects => {
      return {
        ...prevProjects,
        selectedProjectId:null,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevProjects => {
      const newProject = {
        ...projectData,
        id:Math.random()
      }
      return {
        ...prevProjects,
        selectedProjectId:undefined,
        projects:[...prevProjects.projects,newProject ]
      }
    })
    //console.log(projectsState);
  }

  function handleCancel(){
    setProjectsState(prevProjects => {
      return {
        ...prevProjects,
        selectedProjectId:undefined,

      }
    })
  }

  function handleDelete(){
    setProjectsState(prevProjects => {
      return {
        ...prevProjects,
        selectedProjectId:undefined,
        projects:prevProjects.projects.filter(
          (project) => project.id !== prevProjects.selectedProjectId)

      }
    })
  }

  function handleSelectProject(id){
    setProjectsState(prevProjects => {
      return {
        ...prevProjects,
        selectedProjectId:id,
      }
    })
  }
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject tasks={projectsState.tasks} onDeleteTask={handleDeleteTask} onAddTask={handleAddTask} project={selectedProject} onDelete={handleDelete} />;

  if(projectsState.selectedProjectId === null){
    content = <AddNewProject onAdd={handleAddProject} onCancel={handleCancel} />
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected  onStartAdd = {handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8"> 
      <SideBarSol selectedProjectId={projectsState.selectedProjectId} onSelectProject={handleSelectProject} onProjects={projectsState.projects} onStartAdd= {handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
