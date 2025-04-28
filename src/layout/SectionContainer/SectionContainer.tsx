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
    <section className={`w-full ${classNameContainer} z-10`}>
      <div className="max-w-7xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
