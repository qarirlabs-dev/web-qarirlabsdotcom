import { Key } from 'react';

import Image from 'next/image';

import { Program } from '../../data/programs';

function ProgramReview({ ...programData }: Program) {
  return (
    <div
      id="programreview"
      className=" lg:px-20 px-4 lg:pt-32 lg:-mt-16 pt-16 -mt-8"
    >
      <h2 className="lg:text-2xl text-base font-bold lg:mb-10 mb-3.5 lg:text-center text-left lg:text-black text-blue-800 lg:self-center self-start">
        Review Student Kami
      </h2>
      <div className="flex sm:flex-row flex-col lg:gap-20 gap-5 leading-6 ">
        {programData.reviews.map(
          (
            review: {
              student_name: string;
              student_profession: string;
              student_image_profile_url: string;
              content: string;
            },
            index: Key
          ) => (
            <div
              key={index}
              className="basis-1/2 bg-white p-7 rounded-xl shadow-lg"
            >
              <div className="flex flex-col lg:gap-5 gap-3.5 ">
                <div className="flex flex-row items-center lg:gap-6 gap-3.5">
                  <Image
                    className="rounded-full"
                    src={`/assets/images/programs/${review.student_image_profile_url}`}
                    width={72}
                    height={72}
                    alt={review.student_name}
                  />
                  <div className="flex flex-col items-start lg:gap-1 gap-0">
                    <h4 className="text-left font-bold lg:text-lg text-xs tracking-[0.15px]">
                      {review.student_name}
                    </h4>
                    <p className="lg:text-xs text-[8px] text-blue-800 -mt-2">
                      {review.student_profession}
                    </p>
                  </div>
                </div>
                <p className="text-left lg:text-base text-xs lg:leading-6 leading-[18px]  tracking-[0.4px]">
                  &quot;{review.content}&quot;
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default ProgramReview;
