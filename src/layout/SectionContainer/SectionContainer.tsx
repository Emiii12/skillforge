import React, { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  classNameContainer?: string; 
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  classNameContainer = ''
}) => {
  return (
    <section className={`w-full ${classNameContainer}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
