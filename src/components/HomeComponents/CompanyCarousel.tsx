'use client';
import Image from 'next/image';
import SectionContainer from '@/layout/SectionContainer/SectionContainer';

import ChanelLogo from '@/assets/image/companies/chanel-logo.webp';
import CocaColaLogo from '@/assets/image/companies/coca-cola-logo.webp';
import EbcLogo from '@/assets/image/companies/ebc-logo.webp';
import IntelLogo from '@/assets/image/companies/intel-logo.webp';
import KonamiLogo from '@/assets/image/companies/konami-logo.webp';
import LenovoLogo from '@/assets/image/companies/lenovo-logo.webp';
import LgLogo from '@/assets/image/companies/lg-logo.webp';
import McDonaldsLogo from '@/assets/image/companies/mc-donalds-logo.webp';
import MicrosoftLogo from '@/assets/image/companies/microsoft-logo.webp';
import MovistarLogo from '@/assets/image/companies/movistar-logo.webp';
import MrnLogo from '@/assets/image/companies/mrn-logo.webp';
import NikeLogo from '@/assets/image/companies/nike-logo.webp';
import SamsungLogo from '@/assets/image/companies/samsung-logo.webp';
import TuentiLogo from '@/assets/image/companies/tuenti-logo.webp';
import WarnerBrosLogo from '@/assets/image/companies/warner-bros-logo.webp';
import WorkanaLogo from '@/assets/image/companies/workana-logo.webp';

const logos = [
  ChanelLogo, CocaColaLogo, EbcLogo, IntelLogo, KonamiLogo,
  LenovoLogo, LgLogo, McDonaldsLogo, MicrosoftLogo, MovistarLogo,
  MrnLogo, NikeLogo, SamsungLogo, TuentiLogo, WarnerBrosLogo, WorkanaLogo,
];

const firstRow = logos.slice(0, 8);
const secondRow = logos.slice(8, 16);

export default function CompanyCarousel() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <SectionContainer classNameContainer="py-10 bg-white">
      <div className="w-full flex justify-center items-center mb-5">
        <h2 className="text-base text-center font-semibold text-darkBlue opacity-50">
          Empresas que confían en nosotros:
        </h2>
      </div>

      {/* Mobile - Carrusel */}
      <div className="overflow-hidden w-full lg:hidden">
        <div className="scroll-left flex w-max">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="w-[50px] smx:w-[60px] flex-shrink-0 flex items-center justify-center mx-3 grayscale hover:grayscale-0 transition duration-300"
            >
              <Image src={logo} alt={`Logo ${index}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop - 2 filas */}
      <div className="hidden lg:flex lg:flex-col lg:gap-5">
        <div className="grid grid-cols-8 gap-x-6 place-items-center">
          {firstRow.map((logo, index) => (
            <div key={`row1-${index}`} className="w-12 grayscale hover:grayscale-0 transition duration-300">
              <Image src={logo} alt={`Logo ${index}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-x-6 place-items-center">
          {secondRow.map((logo, index) => (
            <div key={`row2-${index}`} className="w-12 grayscale hover:grayscale-0 transition duration-300">
              <Image src={logo} alt={`Logo ${index + 8}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
