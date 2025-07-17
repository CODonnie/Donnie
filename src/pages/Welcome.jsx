import { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { project } = useContext(AppContext);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setVisibleIndexes([]);
    project.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes(prev => [...prev, i]);
      }, i * 150);
    });
  }, [project]);
  return (
    <div className="">
      <div className='fixed top-[80%] left-[7%] flex flex-col items-center justify-end gap-0 h-[120px] cursor-pointer'>
        <div className='absolute top-3 bg-foreground rounded-full w-4 h-4 animate-bounceInfinite'></div>
        <p className='condensed text-2xl italic absolute top-6.5 left-0 text-muted'>Get to</p>
        <p className='condensed text-2xl absolute top-12 left-0 text-muted'>know</p>
        <p className='text-5xl font-bold'>ME</p>
      </div>
      {/* Navbar */}
      <Navbar />
      <div className='mt-20 mb-10'>
        {project.map((items, index) => (
          <div key={index} className="flex flex-col items-end mx-4">
            <div className='flex items-center justify-end group'>
              <p className='font-normal mt-[25px] mr-2 text-muted opacity-0 group-hover:opacity-100 group-hover:animate-slideout transition-all duration-300 cursor-pointer'>{items.info}</p>
              {visibleIndexes.includes(index) && (
                <h2
                  onClick={() => navigate(`/project/${items.id}`)}
                  className="text-[5rem] cursor-pointer font-extrabold leading-tight italic animate-bounceTwice transition-all"
                >
                  {items.title}
                </h2>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Welcome