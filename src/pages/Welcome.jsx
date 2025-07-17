import { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/Appcontext';

const Welcome = () => {
  const { project } = useContext(AppContext);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    setVisibleIndexes([]); // Reset on mount
    project.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes(prev => [...prev, i]);
      }, i * 150); // 300ms per item
    });
  }, [project]);
  return (
    <div className="">
      <div className='fixed top-[80%] left-[7%] flex flex-col items-center justify-end gap-0 h-[100px] cursor-pointer'>
        <p className='condensed text-2xl italic absolute top-0 left-0 text-muted'>get to</p>
        <p className='condensed text-2xl absolute top-6.5 left-0 text-muted'>know</p>
        <p className='text-5xl font-bold'>ME</p>
      </div>
      {/* Navbar */}
      <Navbar />
      <div className='mt-20 mb-10'>
        {project.map((items, index) => (
          <div key={index} className="flex flex-col items-end mx-4 group">
            <div className='flex items-center justify-end'>
              <p className='font-semibold text-muted opacity-0 group-hover:opacity-100 group-hover:animate-slideout transition-all duration-300'>{items.info}</p>
              {visibleIndexes.includes(index) && (
                <h2
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