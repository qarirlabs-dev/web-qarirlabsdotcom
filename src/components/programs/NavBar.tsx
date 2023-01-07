// review: ini udah deprecated, bisa menimbulkan bug sama ownernya disuruh ganti pakai GhostUI https://www.npmjs.com/package/@makotot/ghostui
import Scrollspy from 'react-scrollspy';

import { useWindowDimensions } from '../hooks/useWindowDimension';
//
const NavBar = () => {
  let offset = -100;
  if (useWindowDimensions().width! > 640) {
    offset = -300;
  }
  return (
    <>
      <Scrollspy
        items={[
          'tentangkelas',
          'jadwalkelas',
          'materikelas',
          'mentor',
          'biayakelas',
          'programreview',
          'programfaq',
        ]}
        currentClassName="font-bold underline text-blue-800"
        componentTag="nav"
        className="sticky top-0 no-scrollbar  bg-white flex flex-row lg:gap-10 gap-4 border-t-2 lg:py-8 p-3.5 lg:justify-center justify-start text-base underline-offset-8 decoration-2 z-50 whitespace-nowrap overflow-x-scroll"
        offset={offset}
        onUpdate={(el) => {
          if (el) {
            const id = `nav${el.id}`;
            document!.getElementById(id)!.scrollIntoView({
              behavior: 'smooth',
              inline: 'center',
            });
          }
        }}
      >
        <a
          className="lg:text-base text-sm"
          href="#tentangkelas"
          id="navtentangkelas"
        >
          Tentang Kelas
        </a>
        <a
          className="lg:text-base text-sm"
          href="#jadwalkelas"
          id="navjadwalkelas"
        >
          Jadwal Kelas
        </a>
        <a
          className="lg:text-base text-sm"
          href="#materikelas"
          id="navmaterikelas"
        >
          Materi Kelas
        </a>
        <a className="lg:text-base text-sm" href="#mentor" id="navmentor">
          Mentor
        </a>
        <a
          className="lg:text-base text-sm"
          href="#biayakelas"
          id="navbiayakelas"
        >
          Biaya Pendidikan
        </a>
        <a
          className="lg:text-base text-sm"
          href="#programreview"
          id="navprogramreview"
        >
          Testimoni
        </a>
        <a
          className="lg:text-base text-sm"
          href="#programfaq"
          id="navprogramfaq"
        >
          FAQ
        </a>
      </Scrollspy>
    </>
  );
};
export default NavBar;
