import { Key } from 'react';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

import { Program } from '../../data/programs';

function ProgramMaterial({ ...programData }: Program) {
  let gridClass = 'lg:grid-cols-2 grid-cols-1';
  if (programData.path.params.programName === 'data-science-master-class') {
    gridClass = 'grid-cols-1';
  }

  return (
    <>
      <div
        id="materikelas"
        className="flex flex-col lg:pt-32 pt-16 lg:-mt-16 -mt-8 "
      >
        <div className="bg-blue-50 lg:px-20 px-4 lg:py-16 py-8">
          <h2 className="lg:text-2xl text-base font-bold lg:mb-10 mb-3.5 lg:text-center text-left lg:text-black text-blue-800 lg:self-center self-start">
            Materi Kelas
          </h2>
          <div
            className={classNames(
              `grid ${gridClass} gap-6 justify-items-center`
            )}
          >
            {programData.curriculums.map(
              (
                curriculum: { name: string; description: string },
                index: Key
              ) => (
                <div key={index} className={'max-w-[580px] w-full'}>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            `flex w-full justify-between text-left bg-white lg:text-base text-xs lg:py-3.5 py-3.5 lg:px-8 px-4 lg:gap-28 gap-4 shadow-md ${
                              open ? 'rounded-t-xl' : 'rounded-xl'
                            }`
                          )}
                        >
                          <p className="w-full">{curriculum.name}</p>
                          <ChevronUpIcon
                            className={classNames(
                              `${
                                open ? '' : 'rotate-180 transform'
                              } h-7 w-7 text-[#AEB5B7]`
                            )}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="lg:py-3.5 py-3.5 lg:px-8 px-4 lg:text-base text-xs bg-neutral-50 rounded-b-xl whitespace-pre-wrap shadow-md">
                          {curriculum.description}
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
export default ProgramMaterial;
