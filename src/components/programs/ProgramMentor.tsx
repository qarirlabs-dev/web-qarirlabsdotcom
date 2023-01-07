import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Key } from 'react';

import Image from 'next/image';
import Slider from 'react-slick';

import { Program } from '../../data/programs';
import { useWindowDimensions } from '../hooks/useWindowDimension';

function SampleNextArrow(props: { className?: string; onClick?: Function }) {
  const { className, onClick } = props;
  return (
    <img
      className={`!w-[33px] !h-[33px] !right-[-100px] next slick-next ${className}`}
      src={`/assets/images/icons/arrow-right.svg`}
      onClick={() => onClick && onClick()}
      alt="Arrow Next"
    />
  );
}

function SamplePrevArrow(props: { className?: string; onClick?: Function }) {
  const { className, onClick } = props;
  return (
    <img
      className={`!w-[33px] !h-[33px] !left-[-100px] prev slick-prev ${className}`}
      src={`/assets/images/icons/arrow-left.svg`}
      onClick={() => onClick && onClick()}
      alt="Arrow Previous"
    />
  );
}

const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  // autoplay: true,
  autoplaySpeed: 2500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Desktop = ({ ...programData }: Program) => {
  return (
    <>
      <Slider {...sliderSettings} className="m-auto w-4/5">
        {programData.mentor.map(
          (
            mentor: {
              name: string;
              profession: string;
              image_profile: string;
              profile_url: string;
              company_name: string;
            },
            index: Key
          ) => (
            <div
              key={index}
              className="!grid grid-cols-7 w-2/3 h-auto rounded-lg shadow-md mb-4 my-1"
            >
              <div className="col-span-2 ">
                <Image
                  className="w-auto h-auto"
                  src={`/assets/images/programs/mentor/${mentor.image_profile}`}
                  layout="responsive"
                  height={100}
                  width={100}
                  alt={''}
                />
              </div>
              <div className="col-span-5 w-full px-12 pt-5 pb-0">
                <div className="flex flex-col text-left relative h-full">
                  <h3 className="font-bold text-lg mb-2">{mentor.name}</h3>
                  <p className="text-base text-blue-800 font-normal mb-7 whitespace-pre-wrap">
                    {mentor.profession}
                  </p>
                  <div className="max-h-[60px] max-w-[80px]">
                    <img
                      className="object-contain"
                      src={`/assets/images/programs/mentor/logo/${mentor.company_name}.png`}
                      alt={''}
                    />
                  </div>
                  <a href={mentor.profile_url}>
                    <div className="flex flex-row gap-2 items-center text-left text-xs text-blue-800 font-normal absolute bottom-2">
                      <img
                        className="w-[24px]"
                        src={`/assets/images/icons/linkedin.svg`}
                        alt=""
                      />
                      <p>See Profile</p>
                    </div>
                  </a>
                  <div className="z-50  absolute -bottom-1 -right-12">
                    <Image
                      src={`/assets/images/programs/logoqarirlabsmentor.png`}
                      layout="fixed"
                      height={100}
                      width={200}
                      alt="logo qarirlabs"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
      <style jsx global>{`
        .slick-disabled {
          opacity: 0.3;
        }
      `}</style>
    </>
  );
};

const Mobile = ({ ...programData }: Program) => {
  return (
    <>
      {programData.mentor.map(
        (
          mentor: {
            name: string;
            profession: string;
            image_profile: string;
            profile_url: string;
            company_name: string;
          },
          index: Key
        ) => (
          <div
            key={index}
            className="grid grid-cols-7 w-full h-auto rounded-lg shadow-md mb-4 my-1"
          >
            <div className="col-span-2 ">
              <Image
                className="w-auto h-auto"
                src={`/assets/images/programs/mentor/${mentor.image_profile}`}
                layout="responsive"
                height={80}
                width={80}
                alt={''}
              />
            </div>
            <div className="col-span-5 w-full px-5 pt-2 pb-0">
              <div className="flex flex-col text-left relative h-full">
                <h3 className="font-bold text-xs mb-0">{mentor.name}</h3>
                <p className="text-[8px] text-blue-800 font-normal mb-1 whitespace-pre-wrap">
                  {mentor.profession}
                </p>
                <div className="max-h-[20px] max-w-[40px]">
                  <img
                    className="object-contain"
                    src={`/assets/images/programs/mentor/logo/${mentor.company_name}.png`}
                    alt={''}
                  />
                </div>
                <a className="mt-1" href={mentor.profile_url}>
                  <div className="flex flex-row gap-2 items-center text-left text-[8px] text-blue-800 font-normal  bottom-1">
                    <img
                      className="w-[12px]"
                      src={`/assets/images/icons/linkedin.svg`}
                      alt=""
                    />
                    <p>See Profile</p>
                  </div>
                </a>
                <div className="z-50  absolute -bottom-1 -right-5">
                  <Image
                    src="/assets/images/programs/logoqarirlabsmentor.png"
                    layout="fixed"
                    height={30}
                    width={60}
                    alt="logo qarirlabs"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

function ProgramMentor({ ...programData }: Program) {
  return (
    <div
      id="mentor"
      className="flex flex-col lg:px-44 px-3.5 items-center lg:font-bold font-normal lg:pt-32 lg:-mt-16 pt-16 -mt-8"
    >
      <h2 className="lg:text-2xl text-base font-bold lg:mb-10 mb-3.5 lg:text-center text-left lg:text-black text-blue-800 lg:self-center self-start">
        Mentor
      </h2>
      <p className="lg:text-lg lg:mb-10 mb-6 text-xs ">
        Terhubung dengan mentor berpengalaman dari berbagai perusahaan digital
        terkemuka
      </p>
      {useWindowDimensions().width! > 640 ? (
        <Desktop {...programData} />
      ) : (
        <Mobile {...programData} />
      )}
    </div>
  );
}

export default ProgramMentor;
