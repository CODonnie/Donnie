import { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { project } = useContext(AppContext);
  const [moreProject, setMoreProject] = useState(false);
  const [projectCount, setProjectCount] = useState("");
  const [projectType, setProjectType] = useState("");
  const navigate = useNavigate();

  const projectTypesArray = [
    { name: "Front-End", subName: "Web Dev" },
    { name: "Graphics", subName: "Design" },
    { name: "UI/UX", subName: "UI/UX" },
    { name: "all", subName: "all" }
  ]

  const setFilter = (item) => {
    const count = project.filter((p) => {
      if (!item.name || item.name === "all") return true;
      return p.subType === item.name;
    }).length;
    setProjectCount(count);
    setProjectType(item.name);
    setMoreProject(true);
  }

  const ProjLength = moreProject ? project : project.slice(0, 5);

  const getProject = ProjLength.filter((project) => {
    if (!projectType || projectType === "all") return true;
    return project.subType === projectType;
  })

  return (
    <div className="relative h-screen overflow-hidden">
      {/* landscape  and sun background */}

      <div className='fixed bottom-24 left-20 sm:right-70 w-14 h-7 rounded-t-full bg-gradient-to-b from-accent to-sunAccent shadow-[0_0_60px_20px_var(--sunAccent)] z-0'></div>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 42.3" fill='currentColor' className='fixed bottom-0 h-25 z-30 transition-transform duration-500 hover:scale-110'>
        <path d="M494.77,144.25h7.9l34,0,34.06,0,34.12,0,34.16,0H840m-345.23-4.9H506.3l32-.05,32.08,0,32.14,0,32.17-.05H840m-345.23-4.32,14.76,0,30.28-.05,30.32,0,30.37-.05,30.41,0,209.09,0m-345.23-3.84,17.65,0,28.71-.05,28.75,0,28.78,0,28.83,0,212.51,0m-345.23-3.43,20.26,0,27.29,0,27.33,0,27.36,0,27.4,0,215.59,0m-244.49-3.24,0,.08,1.47,3.24,1.65,3.67,1.84,4.06,2,4.54,2.3,5.09,2.6,5.77m-38-26.4v0l.21,3.28.23,3.66.25,4.07.28,4.53.32,5.1.36,5.76m-27.69-26.4v0l-1.07,3.3-1.19,3.66-1.32,4.07-1.48,4.53-1.66,5.1L534.8,150m-17.41-26.39L515,126.89l-2.61,3.66-2.89,4.07-3.23,4.53-3.63,5.09-4.1,5.76m28.79-35.45-3,2.66,23.52,0,1.89-2.66Zm61.38,0-19.65,0,.11,2.65,21.58,0Zm-94,5.71h1.56l24.68,0,24.77,0,23.53,0,23.77,0,24,0,26,0H840m-345.23-2.86h5.87l23.73,0,23.52,0,21.31,0,21.58,0,22.11,0,25.92,0H840m0-2.66H635l-25.86,0-20.39,0-19.65,0H549.78l-22.42,0-22.89,0h-9.7m0-2.39h13.14l22.14,0,21.42,0,17.53,0h17.91l18.85,0,25.82,0H840M583.72,108l0,.06,1.5,1.94,1.65,2.15,1.83,2.38,2,2.65,2.3,3,2.53,3.3,243.93,0M568.84,108V108l.08,1.95.08,2.14.09,2.39.11,2.65.11,3,.13,3.33m-15.1-15.38L553,110l-1.52,2.15-1.69,2.38-1.89,2.66-2.11,3-2.38,3.35M534.8,108l-.13.12-2.2,1.94-2.42,2.15-2.69,2.38-3,2.66-3.36,3-3.62,3.38m-22.62-2.28,1.56-1.08,4.31-3,3.83-2.65,3.44-2.39L511,110l2.79-1.93M840,109.92H628.5l-25.78,0H585.26l-16.34,0H553l-20.52,0L511,110l-16.25,0M840,108H568.84l-74.07,0m0,13.29-1.69-1.18-4.27-3L485,114.55l-3.41-2.38L478.5,110l-2.74-1.91M0,144.35H352.67l34,0,34.06,0,34.12,0,34.16,0h5.76M0,139.26H356.3l32-.05,32.08,0,32.14,0,32.17-.05h10M0,134.74l359.53,0,30.28-.05,30.32,0,30.37,0,30.41,0,13.86,0M0,130.67l362.42,0,28.71-.05,28.75,0,28.78,0,28.83-.05,17.28,0M0,127l365,0,27.29,0,27.33,0,27.36-.05,27.4,0,20.36,0m-23.15-3.28.08.1,2.71,3.22,3.08,3.66,3.42,4.07,3.81,4.53,4.29,5.1,4.85,5.77m-48.35-26.41,0,.08,1.47,3.24,1.65,3.67,1.84,4.06,2.05,4.54,2.3,5.09,2.6,5.77m-38-26.4v0l.21,3.28.23,3.66.25,4.07.28,4.53.32,5.1.36,5.76m-27.69-26.4v0l-1.07,3.3-1.19,3.66-1.32,4.07-1.48,4.53-1.66,5.1-1.87,5.76m-17.41-26.39L365,127l-2.61,3.66-2.89,4.07-3.23,4.53-3.63,5.09-4.1,5.76m28.79-35.45-3,2.66,23.52,0,1.89-2.66Zm61.38-.05-19.65,0,.11,2.65,21.58,0Zm17-2.4-18.85,0,1.83,2.38,20.39,0ZM0,120.31H346.33l24.68,0,24.77,0,23.53,0,23.77,0,24,0,26,0h1.69M0,117.33H350.64l23.73,0,23.52,0,21.31,0,21.58,0,22.11,0,25.92,0h6m0-2.66H485l-25.86,0-20.39,0-19.65,0H399.78l-22.42,0-22.89,0H0m0-2.39H357.91l22.14,0,21.42,0,17.53,0h17.91l18.85,0,25.82,0h13.19m-44.79-4,2.74,1.94,3,2.14,3.37,2.38,3.76,2.65,4.22,3,4.58,3.24m-38-15.38,0,.06,1.5,1.94,1.65,2.15,1.83,2.38,2,2.65,2.3,3,2.53,3.3,0,0m-26.79-15.49v.08l.08,2,.08,2.14.09,2.39.11,2.65.11,3,.13,3.33m-15.1-15.38L403,110.1l-1.52,2.15-1.69,2.38-1.89,2.66-2.11,3-2.38,3.35m-8.6-15.56-.13.12-2.2,1.94-2.42,2.15-2.69,2.38-3,2.66-3.36,3-3.81,3.37h0M0,121.39,494.77,110H478.5l-25.78,0H435.26l-16.34,0H403l-20.52,0-21.45,0-361,0m0,0,361,0,21.45,0,20.52,0h15.93l16.34,0h17.46l25.78,0,3.08,2.14,3.41,2.38,3.82,2.66-25.92,0-3.76-2.65-3.37-2.38-18.85,0,1.83,2.38-19.65,0H399.78l1.69-2.38-21.42,0-22.14,0H0m367.19,11.37h.2L365,127l-2.61,3.66-2.89,4.07,30.28-.05,30.32,0,30.37,0,2.05,4.54-32.14,0-32.08,0-32,.05-3.63,5.09,34,0,34.06,0,34.12,0,34.16,0h5.76m0-36H418.84L0,108.18M656.24,150l-23.63-26.57L607.45,108.1M698.7,150l-23.64-26.57L649.9,108.1M741.15,150l-23.63-26.57L692.36,108.1M783.6,150,760,123.43,734.81,108.1M826.05,150l-23.63-26.57L777.26,108.1M595.61,123.43H0M348.57,108.2l-21.64,15.47-22,26.27m-7.14-41.74-21.64,15.47-22,26.27M247,108.2,225.4,123.67l-22,26.27m-7.15-41.74-21.64,15.47-22,26.27m-7.14-41.74-21.64,15.47-22,26.27M94.74,108.2,73.1,123.67l-22,26.27M44,108.2,22.34,123.67l-22,26.27" transform="translate(0 -107.87)" fill="none" stroke="#007575" stroke-miterlimit="10" stroke-width="0.25" />
      </svg>

      {/* about me button */}
      <div
        onClick={() => navigate(`/about`)}
        className="h-7 w-27 md:w-30 fixed bottom-45 right-10 sm:right-15 md:bottom-54 md:hidden flex items-center justify-end group cusor-pointer">
        <div className={`bg-foreground absolute w-25 h-7 md:w-30 rounded-sm transition-all duration-300 group-hover:buttonRound ${moreProject ? "animate-goLeft" : ""}`}></div>
        <p className={`font-semibold text-1rem text-background z-1 mr-2.5 md:mr-1.5 group-hover:text-foreground group-hover:cursor-pointer cursor-pointer ${moreProject ? "animate-goRight" : ""}`}>About <span>Me</span></p>
      </div>

      <div className="h-25 w-screen fixed bottom-0 bg-background z-10"></div>

      {/* Get to know me element */}
      <div className={`${moreProject ? "fixed bottom-50 left-[7%] flex flex-col items-center justify-end gap-0 h-[120px] cursor-pointer md:hidden" : "hidden"}`}>
        <div className='absolute top-3 bg-foreground rounded-full w-4 h-4 animate-bounceInfinite'></div>
        <p className='condensed text-2xl italic absolute top-6.5 left-0 text-muted'>Get to</p>
        <p className='condensed text-2xl absolute top-12 left-0 text-muted'>know</p>
        <p className='text-5xl font-bold'>ME</p>
      </div>
      {/* Navbar */}
      <Navbar />

      {/* contact */}
      <div className='hidden md:block lg:hidden'>
        <div className='flex flex-col gap-50 w-8 h-[80%] z-10 py-10 fixed left-7 top-10'>
          <div className='flex flex-col gap-15'>
            <p className='rotate-270 text-[16px]'>LinkedIn</p>
            <p className='rotate-270 text-[16px]'>Github</p>
            <p className='rotate-270 text-[16px]'>Behance</p>
          </div>
          <p className='rotate-270 text-[16px]'>ordudesigns@gmail.com</p>
          <p className='rotate-270 text-[16px]'>About</p>
        </div>
      </div>

      {/* intro - only visible on >= laptop screen */}
      <div className="intro fixed bottom-40 left-20">
        <div className='group relative'>
          <div className="flex gap-4 absolute top-15 left-1.5">
            <p className='relative'>Ordu Donald Chibuike</p>
          </div>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.02 4.06" fill="currentColor" className="w-70 h-70 text-foreground">
            <path d="M5.44,7V8.13a.8.8,0,0,1-.79.79H2.16a.79.79,0,0,1-.78-.79V5.64a.78.78,0,0,1,.78-.78H4.65a.79.79,0,0,1,.79.78V6.82h-2V6.21a.07.07,0,0,0-.14,0V7.56a.07.07,0,0,0,.14,0V7ZM8.92,5.64V8.13a.79.79,0,0,1-.78.79H5.65a.78.78,0,0,1-.31-.07.85.85,0,0,0,.27-.61V5.54a.87.87,0,0,0-.27-.62.78.78,0,0,1,.31-.06H8.14A.78.78,0,0,1,8.92,5.64ZM7,6.21a.07.07,0,1,0-.14,0V7.56a.07.07,0,0,0,.14,0Zm5.44-.57V8.13a.8.8,0,0,1-.79.79H8.67a.84.84,0,0,0,.43-.71V5.57a.82.82,0,0,0-.43-.71h2.94A.79.79,0,0,1,12.4,5.64Zm-1,.57a.07.07,0,1,0-.14,0V7.56a.07.07,0,1,0,.14,0Z" transform="translate(-1.38 -4.86)" />
          </svg>
          <p className="italic text-muted text-[15px] font-semibold absolute top-[70%] left-0">FrontEnd Developer & Graphics Designer</p>
        </div>
        <div className='grid grid-cols-3 w-[300px] border absolute top-[80%]'>
          <p className='text-[16px] border-r border-b pl-1'>About</p>
          <p className='text-[16px] col-span-2 pl-1 border-b'>ordudesigns@gmail.com</p>
          <div className='grid grid-cols-3 col-span-3'>
            <p className='text-[16px] border-r pl-1'>LinkedIn</p>
            <p className='text-[16px] border-r pl-1'>Github</p>
            <p className='text-[16px] pl-1'>Behance</p>
          </div>
        </div>
      </div>

      {/* project list n filter button */}
      <div className='mt-40 lg:mt-28 mr-5 sm:mr-15 md:mr-25 lg:mr-35 h-full overflow-y-auto scrollbar-hide'>
        <div className="w-[80%] h-[40px] absolute right-0 z-10 bg-gradient-to-b from-background to-transparent"></div>

        {/* filter buttons */}
        <div className='w-65 flex gap-2 fixed top-30 lg:top-10 right-10 sm:right-15 md:right-26 lg:right-36 justify-end'>
          {
            projectTypesArray.map((item, i) => (
              <div key={i}
                onClick={() => setFilter(item)} className={`${projectType === item.name ? "absolute left-0" : ""} "relative "`}>
                <p className={`text-foreground text-[12px] font-semibold bg-background w-4 h-4 rounded-full flex items-center justify-center right-0 top-0 ${projectType === item.name ? "absolute" : "hidden"}`}>
                  {projectCount}
                </p>
                <button className={`transition-all duration-300 ${projectType === item.name ? "bg-foreground text-background px-2 py-0.5 mr-2 mt-2 rounded-sm cursor-pointer" : "bg-muted text-background px-2 py-0.5 hover:px-2 hover:py-2 hover:bg-accent mr-2 mt-2 rounded-sm cursor-pointer"}`}>
                  {`${projectType === item.name ? item.name : item.subName}`}
                </button>
              </div>
            ))
          }
        </div>
        {/* project list */}
        <div className='mb-100 mt-5 relatiive'>
          {getProject.map((items, index) => (
            <div key={index} className="flex flex-col items-end mx-4">
              <div className='flex items-center justify-end group h-[82px] sm:h-[100px] md:h-[110px] lg:h-[140px]'>
                <p className='font-normal mt-[25px] mr-2 text-muted opacity-0 group-hover:opacity-100 group-hover:animate-slideout transition-all duration-300 cursor-pointer'>{items.info}</p>
                <h2
                  onClick={() => navigate(`/project/${items.id}`)}
                  className="text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] md:mr-1 lg:mr-2 cursor-pointer font-extrabold leading-tight italic animate-bounceTwice transition-all"
                >
                  {items.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default Welcome