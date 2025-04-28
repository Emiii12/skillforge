import React from 'react';
import SectionContainer from "@/layout/SectionContainer/SectionContainer";

const HomePage = () => {
	return (
		<SectionContainer classNameContainer='bg-lightBrand pt-20'>
			<div className='w-full bg-red-50 flex justify-center items-center'>
				<h2 className='text-2xl text-darkBlue'>Hola, este es mi home</h2>
			</div>
		</SectionContainer>
	)
}

export default HomePage;