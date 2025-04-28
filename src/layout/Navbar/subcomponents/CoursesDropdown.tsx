import { Dropdown } from '@/ui/Modal/Dropdown';
import { AcademicCapIcon, CodeBracketIcon, GlobeAltIcon, HeartIcon, LanguageIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import React from 'react';

const options = [
		{ label: "Programación", icon: <CodeBracketIcon /> },
		{ label: "Cloud Computing", icon: <GlobeAltIcon /> },
		{ label: "Mantenimiento", icon: <WrenchScrewdriverIcon /> },
		{ label: "Salud", icon: <HeartIcon /> },
		{ label: "Ingeniería", icon: <AcademicCapIcon /> },
		{ label: "Idiomas", icon: <LanguageIcon /> },
	];

const CoursesDropdown = () => {
  return (
		<Dropdown 
			id="courses-dropdown" 
			label="Cursos" isSelect  
			classNameButton='text-base lg:text-lg'
			classNameDrop='left-0 top-full w-full md:w-[500px] lg:w-[860px]'
		>
			<div className="grid grid-cols-1 smx:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 p-6">
				{options.map((option, idx) => (
					<button key={idx} className="relative flex items-center justify-start gap-3 hover:text-lightBrand transition cursor-pointer">
						<span className="absolute left-0 size-6 text-lightBrand">{option.icon}</span>
						<span className="text-base text-darkBlue ml-11 smx:ml-9">{option.label}</span>
					</button>
				))}
			</div>
		</Dropdown>	
  )
}

export default CoursesDropdown