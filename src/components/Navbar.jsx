import React from 'react';
import { assets } from "../assets/assets";
import { AlignRight } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4 fixed top-0 left-0 right-0'>
        <img src={assets.codlogo2} alt="COD_logo.png" className="w-20 h-20" />
        <AlignRight className="w-12 h-12" />
      </div>
    </div>
  )
}

export default Navbar
