import { AlignRight } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4 fixed top-0 left-0 right-0'>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.02 4.06" fill="currentColor" className="w-23 h-23 text-foreground">
          <path d="M5.44,7V8.13a.8.8,0,0,1-.79.79H2.16a.79.79,0,0,1-.78-.79V5.64a.78.78,0,0,1,.78-.78H4.65a.79.79,0,0,1,.79.78V6.82h-2V6.21a.07.07,0,0,0-.14,0V7.56a.07.07,0,0,0,.14,0V7ZM8.92,5.64V8.13a.79.79,0,0,1-.78.79H5.65a.78.78,0,0,1-.31-.07.85.85,0,0,0,.27-.61V5.54a.87.87,0,0,0-.27-.62.78.78,0,0,1,.31-.06H8.14A.78.78,0,0,1,8.92,5.64ZM7,6.21a.07.07,0,1,0-.14,0V7.56a.07.07,0,0,0,.14,0Zm5.44-.57V8.13a.8.8,0,0,1-.79.79H8.67a.84.84,0,0,0,.43-.71V5.57a.82.82,0,0,0-.43-.71h2.94A.79.79,0,0,1,12.4,5.64Zm-1,.57a.07.07,0,1,0-.14,0V7.56a.07.07,0,1,0,.14,0Z" transform="translate(-1.38 -4.86)" />
        </svg>
        <AlignRight className="w-8 h-8" />
      </div>
    </div>
  )
}

export default Navbar
