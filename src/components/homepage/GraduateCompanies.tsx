import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';

import Image from 'next/image';
import Slider from 'react-slick';

import { useWindowDimensions } from '../hooks/useWindowDimension';

type Props = {
  withLineBreak?: boolean;
};

const GraduateCompanies: React.FC<
  React.HTMLAttributes<HTMLDivElement> & Props
> = ({ withLineBreak, ...props }) => {
  let lineBreak: JSX.Element = <></>;
  let companiesList;

  if (useWindowDimensions().width! < 640) {
    if (withLineBreak) {
      lineBreak = <br />;
    }
    companiesList = [
      ['dentsu', 'tokopedia', 'danone'],
      ['kaskus', 'stickearn', 'telkom'],
      ['kumpul', 'shopee', 'tiktok'],
      ['rumah-zakat', 'majoo', 'kao'],
    ];
  } else {
    companiesList = [
      ['dentsu', 'tokopedia', 'danone', 'kaskus', 'stickearn'],
      ['telkom', 'kumpul', 'shopee', 'tiktok', 'rumah-zakat'],
      ['majoo', 'kao'],
    ];
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className={`bg-white pb-8 ${props.className}`}>
      <h2 className=" font-bold lg:text-2xl text-base">
        Lulusan <span className="text-blue-800">Qarir</span>
        <span className="text-gold-500">Labs</span>
        {lineBreak} Telah Bekerja di
      </h2>
      <div>
        <Slider {...sliderSettings} className="m-auto w-4/5">
          {companiesList.map((list, listIndex) => (
            <div key={`list-${listIndex}`}>
              <div className="flex lg:gap-14 gap-5 justify-center">
                {list.map((company, index) => (
                  <div className="w-36 h-32 relative px-7" key={index}>
                    <Image
                      src={`/assets/images/partners/${company}.png`}
                      layout="fill"
                      objectFit="contain"
                      alt={company}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GraduateCompanies;
