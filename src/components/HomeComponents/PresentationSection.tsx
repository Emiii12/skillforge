import SectionContainer from '@/layout/SectionContainer/SectionContainer';
import { ButtonVariant } from '@/ui/Button/ButtonVariant';
import Image from 'next/image';
import React from 'react';
import OnlineClass from '@/assets/image/home/imagen-home.webp';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const PresentationSection = () => {
  return (
    <SectionContainer classNameContainer='bg-thinBrand pt-20 flex justify-center'>
			<div className='w-full max-w-[500px] md:max-w-full flex flex-col lg:flex-row justify-center lg:items-center gap-6 lg:gap-20'>
				<div className='w-full flex flex-col gap-4 md:gap-7 py-5'>
					<p className='text-darkBlue text-3xl font-medium text-center lg:text-balance lg:text-start'>
						¡+200 cursos para que estudies <br className='smx:hidden md:block lg:hidden' /> y te capacites de manera <span className='font-bold uppercase'>online</span>!
					</p>
					<div className='flex justify-center lg:justify-start'>
						<ButtonVariant variant='primary' className='py-3 px-4 w-full smx:max-w-[350px]'>
							<span >Registráte GRATIS</span>
						</ButtonVariant>
					</div>
					<div className='flex items-center justify-center lg:justify-start gap-3'>
						<GlobeAltIcon className='size-9 text-darkBlue' />
						<p className='text-darkBlue lg:text-xl text-balance'>+10.000 estudiantes<br className='block lg:hidden'/> por todo el mundo.</p>
					</div>
				</div>
				<div className="relative w-full mx-auto max-w-xl lg:max-w-2xl">
					<div className="mask-gradient">
						<Image src={OnlineClass} alt='online class' className='w-full h-auto'/>
					</div>
				</div>
			</div>
		</SectionContainer>
  )
}

export default PresentationSection;