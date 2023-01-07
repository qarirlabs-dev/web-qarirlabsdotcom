import { Key } from 'react';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

import { Program } from '../../data/programs';

function ProgramFaq({ ...programData }: Program) {
  return (
    <>
      <div
        id="programfaq"
        className="flex flex-col lg:pt-32 pt-16 lg:-mt-16 -mt-8"
      >
        <div className="bg-blue-50 lg:px-20 px-4 lg:py-8 lg:pb-16 py-4">
          <h2 className="lg:text-2xl text-base font-bold lg:mb-10 mb-3.5 lg:text-center text-left lg:text-black text-blue-800 lg:self-center self-start">
            Pertanyaan Umum
          </h2>
          <p className="lg:text-lg lg:mb-10 mb-6 text-xs text-center">
            Langkah yang tepat untuk berinvestasi kepada ilmu pengetahuan yang
            baru di bidang IT
          </p>
          <div className="grid grid-cols-1 gap-6 justify-items-center">
            {programData.faqs.map(
              (faq: { question: string; answer: string }, index: Key) => (
                <div key={index} className="max-w-[580px] w-full">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            'flex w-full justify-between text-left bg-white lg:text-base text-xs lg:py-3.5 py-3.5 lg:px-8 px-4 lg:gap-28 gap-4 shadow-md',
                            { 'rounded-t-xl': open, 'rounded-xl': !open }
                          )}
                        >
                          <p className="w-full"> {faq.question}</p>
                          <ChevronUpIcon
                            className={classNames(
                              `${
                                open ? '' : 'rotate-180 transform'
                              } h-10 w-10 text-[#AEB5B7]`
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="lg:py-3.5 py-3.5 lg:px-8 px-4 lg:text-base text-xs bg-neutral-50 rounded-b-xl whitespace-pre-wrap shadow-md">
                          {faq.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProgramFaq;
