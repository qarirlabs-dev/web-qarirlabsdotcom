import Image from 'next/image';

import { Program } from '../../data/programs';
import { Navbar } from '../layout/Navbar';

function ProgramsHeader({ ...programData }: Program) {
  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-2 text-white ">
        <div className="bg-blue-800 lg:col-span-1 col-span-2 relative lg:pt-36 lg:pb-18 py-12 lg:pl-20 pl-4 lg:pr-36 pr-[90px] gap-6">
          <h1 className="font-bold lg:text-5xl sm:text-3xl text-2xl">
            {programData.title}
          </h1>
          <p className="mt-7 text-sm lg:text-base">{programData.summary}</p>
          <a
            href={`https://api.whatsapp.com/send?phone=6287732199307&text=Hai Admin Qarirlabs, Saya ingin tahu lebih lanjut mengenai program ${programData.title}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block lg:mt-20 mt-14 mb-4 md:mb-10 sm:mb-10 lg:mb-1 text-xs lg:text-base bg-gradient-to-r from-gold-300 to-gold-600 hover:from-gold-600 hover:to-gold-300 px-9 py-5 text-blue-800 rounded-full border-0 font-bold "
          >
            Hubungi Kami
          </a>
          <div className="sm:hidden absolute w-[200px] h-[240px] border-4 border-blue-700 right-[-110px] bottom-[-55px] rounded-[50px] z-10"></div>
        </div>
        <div className="bg-blue-800 col-span-1 relative lg:block hidden">
          <Image
            className="absolute top-0 right-0"
            src={`/assets/images/programs/${programData.heroImage}`}
            alt="hero image"
            layout="responsive"
            width="100%"
            height="89%"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
export default ProgramsHeader;
