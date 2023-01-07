import { Program } from '../../data/programs';

function AboutProgram({ ...programData }: Program) {
  return (
    <div
      id="tentangkelas"
      className="grid  bg-blue-50  lg:gap-16 gap-6 lg:px-20 px-4 lg:py-16 py-8 lg:pt-32 pt-16 lg:-mt-16 -mt-8"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-28">
        <div className="flex flex-col gap-6 lg:px-12">
          <h2 className="lg:text-2xl text-base font-bold lg:text-black text-blue-800">
            Tentang Kelas
          </h2>
          <div
            className="lg:text-base text-xs"
            dangerouslySetInnerHTML={{
              __html: programData.about,
            }}
          />
        </div>
        <div className="relative lg:block hidden">
          <div className="border border-blue-800 rounded-tl-[200px] rounded-br-[200px] z-20 max-h-[450px] h-full w-full absolute"></div>
          <img
            className="relative left-5 top-4 !z-0"
            src={`/assets/images/programs/${programData.aboutImage}`}
            alt={programData.title}
          />
        </div>
      </div>
      <div className="border border-neutral-100"></div>
      <h2 className="lg:text-2xl text-base font-bold lg:text-center lg:-mb-6 lg:text-black text-blue-800 lg:whitespace-nowrap whitespace-pre-wrap">
        Kelas ini didesign{'\n'}
        untuk kamu
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1  lg:gap-10 gap-3.5 justify-center place-content-center content-center lg:px-36 px-14 ">
        {programData.userPersona.map(
          (
            persona: { title: string; description: string; image: string },
            index: number
          ) => (
            <div
              key={index}
              className="flex flex-col gap-0 lg:gap-1 bg-white rounded-xl shadow-md"
            >
              <img
                className="rounded-t-xl "
                src={`/assets/images/programs/persona/${persona.image}`}
                alt=""
              />
              <div className="lg:py-5 lg:px-6 py-2 px-5">
                <p className="lg:text-base text-xs font-bold lg:mb-3 mb-1">
                  {index + 1}. {persona.title}
                </p>
                <p className="lg:text-sm text-[10px] text-neutral-500">
                  {persona.description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default AboutProgram;
