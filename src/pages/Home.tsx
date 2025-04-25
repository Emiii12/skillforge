import React from 'react';
import SectionContainer from "@/layout/SectionContainer/SectionContainer";

const HomePage = () => {
	return (
		<SectionContainer classNameContainer='bg-lightBrand'>
			<div className='flex justify-center items-center'>
				<h2 className='text-2xl text-darkBlue'>Hola, este es mi home</h2>
			</div>
		</SectionContainer>
	)
}

export default HomePage;