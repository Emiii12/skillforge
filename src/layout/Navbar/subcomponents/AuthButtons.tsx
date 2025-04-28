import React from 'react';
import { Dropdown } from '@/ui/Modal/Dropdown';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { ButtonVariant } from '@/ui/Button/ButtonVariant';

export const AuthDropdown = () => {
  return (
    <Dropdown 
      id="mobile-menu"
      isSelect={false} 
      label="" 
      icon={<Bars3Icon className="size-6 sm:size-7 text-extraDarkBrand" />}
      classNameDrop='right-0 top-full w-full md:w-[500px] lg:w-[860px]'
    >
      <div className='flex flex-col p-4 gap-2'>
				<ButtonVariant variant="secondary" fullWidth>
          Iniciar Sesión
        </ButtonVariant>
        <ButtonVariant variant="primary" fullWidth>
          Registrarse
        </ButtonVariant>
      </div>
    </Dropdown>
  );
};


export const AuthNavbar = () => {
  return (
    <div className='flex gap-2'>
      <ButtonVariant variant="secondary" className='text-sm lg:text-base' >
        Iniciar Sesión
      </ButtonVariant>
      <ButtonVariant variant="primary" className='text-sm lg:text-base'>
        Registrarse
      </ButtonVariant>
    </div>
  )
}
