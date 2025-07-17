import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Appcontext';

const Project = () => {
  const { id } = useParams();
  const { project } = useContext(AppContext);
  const [ showProject, setShowProject ] = useState(false);

  useEffect(() => {
    setTimeout(() =>{
      setShowProject(true);
    }, 3000)
    
  }, []);

  const selectedProject = project.find(item => String(item.id) === id);

  if (!selectedProject) {
    return <div className="p-8 text-center text-xl">Project not found.</div>;
  }

  return (
    <div className="">
      <div className={`bg-green-400 w-full ${showProject ? "animate-div-cover" : "animate-div-remove"} transition-all duration-300`}></div>
      <div>
        <h1 onClick={()=> setShowProject(true)} className="text-4xl font-bold mb-4">{selectedProject.title}</h1>
        <p className="mb-2 text-lg">{selectedProject.info}</p>
      </div>

      {/* Add more project details here */}
    </div>
  );
}

export default Project
