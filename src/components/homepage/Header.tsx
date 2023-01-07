import Image from 'next/image';

import Logo from '../logo/Logo';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-10 lg:grid-cols-2 text-white">
      <div className="lg:px-20 lg:pt-24 lg:pb-36 pr-20 pl-4 pt-6 pb-8 bg-blue-800 relative sm:col-span-6 lg:col-span-1">
        <Logo variant="white" />
        <h1 className="font-bold lg:text-5xl sm:text-3xl text-2xl mt-12">
          The New Way to{' '}
          <span className="text-gold-500">
            Achive{' '}
            <span className="curved-underline relative">Good Skills</span>
          </span>
        </h1>
        <p className="mt-7 text-sm lg:text-lg">
          Seluruh pemimpin industri bergabung, berkomitmen, dan mengajar disini.
          Belajarlah dari praktisi terbaik di dunia dan jadilah seperti mereka.
        </p>
        <a
          href="#program-section"
          className="inline-block mt-7 text-xs lg:text-lg bg-gradient-to-r from-gold-300 to-gold-600 hover:from-gold-600 hover:to-gold-300 px-7 py-3.5 text-blue-800 rounded-full border-0 font-bold mb-28 sm:mb-20 lg:mb-1"
        >
          Explore Our Programs
        </a>
        <div className="absolute w-64 h-44 -left-16 -bottom-20 rounded-5xl border-4 border-white/50 "></div>
      </div>
      <div className="relative hidden sm:block lg:block h-auto w-auto sm:col-span-4 lg:col-span-1">
        <Image
          src={'/assets/images/homepage/hero.png'}
          alt="hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="62%"
        />
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-3/5 absolute left-[20%] z-20 bg-white shadow-md rounded-xl px-6 sm:px-10 py-3 sm:py-2 justify-between drop-shadow-md text-blue-800 text-center -mt-14 sm:-mt-10 text-xs sm:text-sm lg:text-lg">
      <div>
        <span className="font-bold text-2xl sm:text-xl lg:text-5xl">3770</span>
        <br /> Enrollments
      </div>
      <div>
        <span className="font-bold text-2xl sm:text-xl lg:text-5xl">2340</span>
        <br /> Alumni
      </div>
      <div>
        <span className="font-bold text-2xl sm:text-xl lg:text-5xl">120</span>
        <br /> Partner
      </div>
      <div>
        <span className="font-bold text-2xl sm:text-xl lg:text-5xl">50+</span>
        <br /> Scholarships
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <Hero />
      <Statistics />
    </>
  );
};

export default Header;
