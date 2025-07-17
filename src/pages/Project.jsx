import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/Appcontext';

const Project = () => {
  const { id } = useParams();
  const { project } = useContext(AppContext);

  const selectedProject = project.find(item => String(item.id) === id);

  if (!selectedProject) {
    return <div className="p-8 text-center text-xl">Project not found.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{selectedProject.title}</h1>
      <p className="mb-2 text-lg">{selectedProject.info}</p>
      {/* Add more project details here */}
    </div>
  );
}

export default Project
