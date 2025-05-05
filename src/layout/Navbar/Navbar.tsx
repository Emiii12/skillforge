import React from 'react';
import Image from 'next/image';
import SkillForge from '@/assets/logo/skillforge-text.svg'
import CoursesDropdown from './subcomponents/CoursesDropdown';
import { AuthDropdown, AuthNavbar } from './subcomponents/AuthButtons';

const Navbar = () => {
  return (
    <>
      <div className='fixed w-full h-[65px] bg-extraLightGray z-50 shadow-lg border-b-[1px] border-darkBlue/10'>
        <header className='relative max-w-7xl h-full flex justify-center lg:justify-between items-center mx-auto px-4'>
          <div className='w-full flex justify-start items-center gap-4 smx:gap-6 sm:gap-8'>
            <Image src={SkillForge} alt='Logo' className='w-[72px] lg:w-24'/>
            <CoursesDropdown />
          </div>
          <div className='md:hidden'>
            <AuthDropdown />
          </div>
          <div className='max-md:hidden'>
            <AuthNavbar />
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;