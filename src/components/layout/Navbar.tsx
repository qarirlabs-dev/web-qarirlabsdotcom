import Link from 'next/link';

import Logo from '../logo/Logo';

const Navbar = () => {
  return (
    <div className="lg:pl-20 lg:p-5 p-3 pl-4  flex flex-row sticky top-0 z-40 bg-white shadow ">
      <div className="flex max-h-[25px] lg:max-h-[85px] max-w-[100px] lg:max-w-[165px]">
        <Link href="/">
          <a>
            <Logo variant={'blue'} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
