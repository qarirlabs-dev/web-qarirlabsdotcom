const AlumniStorySection = () => {
  return (
    <div className="bg-blue-50 lg:py-16 py-10 lg:px-20 px-8">
      <h2 className="text-center font-bold lg:text-2xl text-base sm:pb-14 pb-6">
        Cerita Alumni Kami
      </h2>
      <div className="flex sm:flex-row flex-col lg:gap-20 gap-5 leading-6 mb-20">
        <div className="basis-1/2 bg-white p-7 rounded-xl">
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-row items-center gap-6">
              <img
                className="rounded-full w-[72px]"
                src={'/assets/images/alumni/andimas.webp'}
                alt="Andimas Iben"
              />
              <div className="flex flex-col items-start gap-1">
                <h4 className="text-left font-bold lg:text-lg text-sm tracking-[0.15px]">
                  Andimas Iben
                </h4>
                <p className="text-xs text-blue-800">
                  AdsOpt Manager Tokopedia
                </p>
              </div>
            </div>
            <p className="text-left lg:text-base text-xs  tracking-[0.5px]">
              &quot;QarirLabs membantu saya memahami lebih dalam mengenai Data
              Science yang menjadi passion saya. saya berhasil memulai kerja di
              perusahaan impian saya menggunakan skill yang saya dapatkan di
              QarirLabs&quot;.{' '}
            </p>
          </div>
        </div>
        <div className="basis-1/2 bg-white p-7 rounded-xl">
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-row items-center gap-6">
              <img
                className="rounded-full w-[72px]"
                src={'/assets/images/alumni/zalvarani.webp'}
                alt="Zalvarani Fitri Sarjana"
              />
              <div className="flex flex-col items-start gap-1">
                <h4 className="text-left font-bold lg:text-lg text-sm tracking-[0.15px]">
                  Zalvarani Fitri Sarjana
                </h4>
                <p className="text-xs text-blue-800">Media Planner</p>
              </div>
            </div>
            <p className="text-left lg:text-base  text-xs tracking-[0.5px]">
              &quot;The QarirLabs trainer has successfully trained my hard
              skills and softskills in Digital Marketing. Finally, job connector
              and career coaching have succeeded in bringing me to become one of
              the teams at Dentsu Digital Agency. Thank you QarirLabs!&quot;.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniStorySection;
