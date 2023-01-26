import { programs as programsData } from '../../data/programs';

const programs = [
  {
    title: 'Digital Marketing Master Class',
    description:
      'Menjadi Digital Marketer Profesional dalam 12-14 minggu dan raih karir di perusahaan hiring partner QarirLabs yang tersebar di Asia.',
    icon_path: '/assets/images/icons/web_marketing.svg',
    href: `${programsData['digital-marketing-master-class'].path.params.programName}`,
  },
  {
    title: 'Data Science Master Class',
    description:
      'Menjadi Data Scientist Profesional dalam 12-14 minggu dan raih karir di perusahaan hiring partner QarirLabs yang tersebar di Asia.',
    icon_path: '/assets/images/icons/database_options.svg',
    href: `${programsData['data-science-master-class'].path.params.programName}`,
  },
  // {
  //   title: 'UI/UX Design Master Class',
  //   description:
  //     'Menjadi Profesional Desainer UI/UX dalam 12 minggu dan raih karir di perusahaan hiring partner QarirLabs yang tersebar di Asia.',
  //   icon_path: '/assets/images/icons/navigation_toolbar_left.svg',
  //   href: `${programsData['ui-ux-design-master-class'].path.params.programName}`,
  // },
];

const ProgramSection = () => {
  return (
    <div
      className="bg-white lg:py-16 py-10 lg:px-20 sm:px-[17.5%] px-8"
      id="program-section"
    >
      <h2 className="text-center font-bold lg:text-2xl text-base lg:pb-14 pb-6">
        <span className="text-blue-800">Qarir</span>
        <span className="text-gold-500">Labs</span> Master Class Program
      </h2>
      <div className="flex lg:flex-row flex-col gap-8 leading-6 ">
        {programs.map((program, programIndex) => (
          <div
            key={programIndex}
            className="basis-1/2 box-border lg:p-[30px] p-[20px]  border-2 rounded-xl border-blue-800"
          >
            <div className="flex flex-col lg:gap-4 sm:gap-2 gap-1 tracking-[0.5px] sm:p-3">
              <img
                className="w-[40px] lg:w-[60px]"
                src={program.icon_path}
                alt={program.title}
              />
              <h3 className="text-left font-bold lg:text-xl text-base h-auto lg:h-20 xl:h-auto">
                {program.title}
              </h3>
              <p className="text-left lg:text-base text-xs h-auto xl:h-36">
                {program.description}
              </p>
              <div className="border-t-[1px] border-neutral-200 flex flex-col my-5 pt-5">
                <div className="flex flex-row gap-2 text-sm tracking-[0.25px] items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H7C6.46957 2 5.96086 2.21071 5.58579 2.58579C5.21071 2.96086 5 3.46957 5 4V18C5 18.5304 5.21071 19.0391 5.58579 19.4142C5.96086 19.7893 6.46957 20 7 20H10V23L12 22L14 23V20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V7L14 2ZM14 15V17L12 16L10 17V15L8 14L10 13V11L12 12L14 11V13L16 14L14 15ZM13 8V3.5L17.5 8H13Z"
                      fill="url(#paint0_linear_1_809)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_809"
                        x1="16.9116"
                        y1="20.7031"
                        x2="5.38982"
                        y2="19.6808"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#BCAC79" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Sertifikat Kelulusan</p>
                </div>
                <div className="flex flex-row gap-2 text-sm tracking-[0.25px] items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 19.5C22.5 20.4319 22.5 20.8978 22.3478 21.2654C22.1448 21.7554 21.7554 22.1448 21.2654 22.3478C20.8978 22.5 20.4319 22.5 19.5 22.5V22.5C18.5681 22.5 18.1022 22.5 17.7346 22.3478C17.2446 22.1448 16.8552 21.7554 16.6522 21.2654C16.5 20.8978 16.5 20.4319 16.5 19.5V6C16.5 5.06812 16.5 4.60218 16.6522 4.23463C16.8552 3.74458 17.2446 3.35523 17.7346 3.15224C18.1022 3 18.5681 3 19.5 3V3C20.4319 3 20.8978 3 21.2654 3.15224C21.7554 3.35523 22.1448 3.74458 22.3478 4.23463C22.5 4.60218 22.5 5.06812 22.5 6V19.5ZM15 19.5C15 20.4319 15 20.8978 14.8478 21.2654C14.6448 21.7554 14.2554 22.1448 13.7654 22.3478C13.3978 22.5 12.9319 22.5 12 22.5V22.5C11.0681 22.5 10.6022 22.5 10.2346 22.3478C9.74458 22.1448 9.35523 21.7554 9.15224 21.2654C9 20.8978 9 20.4319 9 19.5V12C9 11.0681 9 10.6022 9.15224 10.2346C9.35523 9.74458 9.74458 9.35523 10.2346 9.15224C10.6022 9 11.0681 9 12 9V9C12.9319 9 13.3978 9 13.7654 9.15224C14.2554 9.35523 14.6448 9.74458 14.8478 10.2346C15 10.6022 15 11.0681 15 12V19.5ZM7.5 19.5C7.5 20.4319 7.5 20.8978 7.34776 21.2654C7.14477 21.7554 6.75542 22.1448 6.26537 22.3478C5.89782 22.5 5.43188 22.5 4.5 22.5V22.5C3.56812 22.5 3.10218 22.5 2.73463 22.3478C2.24458 22.1448 1.85523 21.7554 1.65224 21.2654C1.5 20.8978 1.5 20.4319 1.5 19.5V16.5C1.5 15.5681 1.5 15.1022 1.65224 14.7346C1.85523 14.2446 2.24458 13.8552 2.73463 13.6522C3.10218 13.5 3.56812 13.5 4.5 13.5V13.5C5.43188 13.5 5.89782 13.5 6.26537 13.6522C6.75542 13.8552 7.14477 14.2446 7.34776 14.7346C7.5 15.1022 7.5 15.5681 7.5 16.5V19.5Z"
                      fill="url(#paint0_linear_1_812)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_812"
                        x1="19.3674"
                        y1="20.3672"
                        x2="2.29933"
                        y2="17.9207"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#BCAC79" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Beginner - Advanced</p>
                </div>
              </div>
              <div>
                <a
                  href={`/programs/${program.href}`}
                  className="px-7 py-3.5 text-center text-xs rounded-full text-white bg-blue-800 hover:bg-blue-500"
                >
                  Lihat Kelas
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSection;
