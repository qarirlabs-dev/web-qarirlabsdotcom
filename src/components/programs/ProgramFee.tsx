import { Key } from 'react';

import { Program } from '../../data/programs';

const OkSignGold = () => {
  return (
    <img
      className="lg:w-[20px] w-[14px] fill-gold-500"
      src="/assets/images/icons/ok_sign_gold-500.svg"
      alt=""
    />
  );
};

function ProgramFee({ ...programData }: Program) {
  return (
    <div
      id="biayakelas"
      className="flex flex-col lg:pt-32 pt-16 lg:-mt-16 -mt-8 text-center"
    >
      <div className="bg-blue-50 lg:px-20 px-4 lg:py-16 py-3.5">
        <h2 className="lg:text-2xl text-base font-bold lg:mb-10 mb-3.5 lg:text-center text-left lg:text-black text-blue-800 lg:self-center self-start">
          Batch Spring Intake
        </h2>
        <p className="lg:text-lg lg:mb-10 mb-6 text-xs">
          Mulai perubahan hari ini dengan upgrade diri di bidang Digital
          Marketing
        </p>
        <div className="px-8 lg:px-0">
          <div className=" flex flex-col lg:flex-row lg:gap-10 gap-3.5 place-content-center ">
            {programData.programPackages.map((programPackage, index: Key) => (
              <div
                key={index}
                className="relative grid grid-cols-1  place-content-between lg:p-10 p-6 border-2 border-blue-800 rounded-xl text-left bg-white lg:w-[400px]"
              >
                {programPackage.is_sold_out && (
                  <div className="absolute pt-9 px-3.5 pb-3 font-bold text-sm right-10 -top-0.5 rounded-b-xl text-white bg-red-700">
                    Sold Out
                  </div>
                )}
                <div className="grid grid-cols-1">
                  <p className="lg:text-xs text-[10px] font-bold lg:py-2.5 py-1.5 lg:px-5 px-2.5 text-blue-800 border-2 border-blue-800 rounded-xl mb-6  w-fit">
                    {programPackage.name}
                  </p>
                  <p className="lg:text-xs text-[10px] line-through text-red-600">
                    {programPackage.fake_price}
                  </p>
                  <h5 className="lg:text-[28px] text-[20px] text-blue-800 font-bold mb-1">
                    {programPackage.real_price}
                  </h5>
                  <p className="lg:text-sm text-[10px] lg:mb-5 mb-3.5 lg:pr-0 pr-8">
                    {programPackage.headline}
                  </p>
                  <div className="border-b border-neutral-200 lg:mb-5 mb-3.5"></div>
                  {programPackage.package_advantages.map((advantage, i) => (
                    <div
                      key={i}
                      className="flex flex-row lg:gap-5 gap-3.5 lg:mb-5 mb-3.5"
                    >
                      <OkSignGold />
                      <p className="lg:text-sm text-[10px]">
                        {advantage.content}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://api.whatsapp.com/send?phone=6287732199307&text=Hai Admin Qarirlabs, Saya ingin tahu lebih lanjut mengenai program ${programData.title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="w-full lg:py-3.5 py-2.5  text-center lg:text-xs text-[10px] lg:font-normal font-bold rounded-full text-white bg-blue-800 hover:bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    type="button"
                    disabled={programPackage.is_sold_out}
                  >
                    Konsultasi Sekarang
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProgramFee;
