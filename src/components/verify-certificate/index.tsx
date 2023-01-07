import { useState } from 'react';

import Link from 'next/link';

import { Navbar } from '../layout/Navbar';

const VerifyCertificate = () => {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="flex flex-row">
        <div className="lg:basis-1/2">
          <div className="grid grid-cols-1 relative border gap-6 p-4 lg:p-20">
            <h1 className="text-5xl font-bold">
              Verifikasi Sertifikat QarirLabs
            </h1>
            <p className=" text-base text-neutral-500 tracking-[0.15px]">
              Halaman ini memungkinkan kamu untuk memverifikasi sertifikat yang
              diberikan kepada siswa kami adalah asli. Setiap sertifikat
              menyertakan Credential ID individu di sudut kiri bawah.
            </p>
            <div>
              <p className="text-base text-neutral-500 tracking-[0.5px]">
                Credential ID
              </p>
              <div className="login-form mb-7">
                <input
                  type="text"
                  className="px-5 py-3.5 block w-[100%] rounded-xl border border-neutral-300 focus:border-blue-500   text-sm"
                  id="credential_id"
                  placeholder="Enter your Credential ID"
                  name="CredentialId"
                  value={value}
                  onChange={(e) => {
                    setValue(e.currentTarget.value);
                  }}
                />
              </div>
            </div>
            <Link href={`/certificate/${value}`}>
              <a className="mb-4 rounded-full px-8 py-4 text-base font-bold block text-center text-white bg-blue-800 hover:bg-blue-500">
                Periksa
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:block hidden bg-[url('/assets/images/certificate/bg-certificate.png')] bg-no-repeat bg-center bg-cover basis-1/2 p-10 sm:mb-0 mb-2 "></div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
