import Link from 'next/link';

import { programs } from '../../data/programs';
import Logo from '../logo/Logo';

const Footer = () => {
  return (
    <div className="lg:py-16 py-10 lg:px-20 px-8 bg-blue-800 text-white">
      <div className="flex lg:flex-row flex-col sm:gap-5 lg:gap-16 gap-3">
        <div className="col-span-2">
          <Link href="/">
            <a>
              <Logo variant="white" />
            </a>
          </Link>
          <p className="lg:mt-7 mt-3 text-base">
            QarirLabs is the #1 edutech solutions & tech-talent platform for
            career development in South East Asia to bridge young generation to
            the industry expert.
          </p>
          <div className="flex lg:mt-7 mt-3 gap-3">
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-400 hover:text-pink-700"
            >
              <a
                href="https://www.instagram.com/qarirlabs.official/"
                target="_blank"
                rel="noreferrer"
              >
                <circle cx="16.9999" cy="17.6609" r="17" fill="white" />

                <path
                  d="M16.9939 20.643C18.6524 20.643 19.9969 19.2985 19.9969 17.64C19.9969 15.9815 18.6524 14.637 16.9939 14.637C15.3354 14.637 13.9909 15.9815 13.9909 17.64C13.9909 19.2985 15.3354 20.643 16.9939 20.643Z"
                  fill="currentColor"
                />
                <path
                  d="M25.9469 13.9658C25.9368 13.2085 25.795 12.4586 25.5279 11.7498C25.2962 11.152 24.9424 10.609 24.4891 10.1557C24.0357 9.70231 23.4927 9.3485 22.8949 9.11685C22.1952 8.8542 21.4561 8.71219 20.7089 8.69685C19.7469 8.65385 19.4419 8.64185 16.9999 8.64185C14.5579 8.64185 14.2449 8.64185 13.2899 8.69685C12.543 8.7123 11.8042 8.85431 11.1049 9.11685C10.5069 9.34834 9.96391 9.70209 9.51052 10.1555C9.05713 10.6089 8.70338 11.1519 8.47189 11.7498C8.20872 12.449 8.06701 13.188 8.05289 13.9348C8.00989 14.8978 7.99689 15.2028 7.99689 17.6448C7.99689 20.0868 7.99689 20.3988 8.05289 21.3548C8.06789 22.1028 8.20889 22.8408 8.47189 23.5418C8.70376 24.1396 9.05778 24.6824 9.51132 25.1356C9.96486 25.5888 10.508 25.9424 11.1059 26.1738C11.8033 26.447 12.5423 26.5992 13.2909 26.6238C14.2539 26.6668 14.5589 26.6798 17.0009 26.6798C19.4429 26.6798 19.7559 26.6798 20.7109 26.6238C21.458 26.6091 22.1972 26.4674 22.8969 26.2048C23.4946 25.9729 24.0374 25.619 24.4907 25.1657C24.9441 24.7124 25.298 24.1695 25.5299 23.5718C25.7929 22.8718 25.9339 22.1338 25.9489 21.3848C25.9919 20.4228 26.0049 20.1178 26.0049 17.6748C26.0029 15.2328 26.0029 14.9228 25.9469 13.9658ZM16.9939 22.2628C14.4399 22.2628 12.3709 20.1938 12.3709 17.6398C12.3709 15.0858 14.4399 13.0168 16.9939 13.0168C18.22 13.0168 19.3959 13.5039 20.2628 14.3709C21.1298 15.2379 21.6169 16.4138 21.6169 17.6398C21.6169 18.8659 21.1298 20.0418 20.2628 20.9088C19.3959 21.7758 18.22 22.2628 16.9939 22.2628ZM21.8009 13.9238C21.6593 13.924 21.519 13.8962 21.3882 13.8421C21.2574 13.7879 21.1385 13.7085 21.0383 13.6084C20.9382 13.5083 20.8588 13.3894 20.8047 13.2585C20.7505 13.1277 20.7228 12.9874 20.7229 12.8458C20.7229 12.7043 20.7508 12.5642 20.8049 12.4335C20.8591 12.3028 20.9384 12.184 21.0385 12.0839C21.1385 11.9839 21.2573 11.9045 21.388 11.8504C21.5188 11.7962 21.6589 11.7683 21.8004 11.7683C21.9419 11.7683 22.082 11.7962 22.2127 11.8504C22.3435 11.9045 22.4622 11.9839 22.5623 12.0839C22.6624 12.184 22.7417 12.3028 22.7959 12.4335C22.85 12.5642 22.8779 12.7043 22.8779 12.8458C22.8779 13.4418 22.3959 13.9238 21.8009 13.9238Z"
                  fill="currentColor"
                />
              </a>
            </svg>
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-400 hover:text-sky-600"
            >
              <a
                href="https://www.linkedin.com/company/qarirlabscom"
                target="_blank"
                rel="noreferrer"
              >
                <circle cx="16.9999" cy="17.6609" r="17" fill="white" />
                <path
                  d="M10.9829 11.8579C12.1913 11.8579 13.1709 10.8783 13.1709 9.66993C13.1709 8.46153 12.1913 7.48193 10.9829 7.48193C9.77449 7.48193 8.79489 8.46153 8.79489 9.66993C8.79489 10.8783 9.77449 11.8579 10.9829 11.8579Z"
                  fill="currentColor"
                />
                <path
                  d="M15.2369 13.5158V25.6548H19.0059V19.6518C19.0059 18.0678 19.3039 16.5338 21.2679 16.5338C23.2049 16.5338 23.2289 18.3448 23.2289 19.7518V25.6558H26.9999V18.9988C26.9999 15.7288 26.2959 13.2158 22.4739 13.2158C20.6389 13.2158 19.4089 14.2228 18.9059 15.1758H18.8549V13.5158H15.2369ZM9.09488 13.5158H12.8699V25.6548H9.09488V13.5158Z"
                  fill="currentColor"
                />
              </a>
            </svg>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-400 hover:text-red-600"
            >
              <a
                href="https://www.youtube.com/channel/UC60bPniruJwFRoMCAowk_-g"
                target="_blank"
                rel="noreferrer"
              >
                <circle cx="17.0044" cy="17.6611" r="17" fill="white" />
                <path
                  d="M25.6069 13.5328C25.5036 13.171 25.3022 12.8412 25.0227 12.5762C24.7432 12.3112 24.3954 12.1202 24.0139 12.0223C22.617 11.6611 16.9953 11.6611 16.9953 11.6611C16.9953 11.6611 11.3732 11.6721 9.97639 12.0333C9.59484 12.1312 9.247 12.3222 8.96751 12.5872C8.68802 12.8522 8.48663 13.182 8.38339 13.5438C7.96088 15.897 7.79699 19.4827 8.39499 21.7418C8.49824 22.1036 8.69963 22.4334 8.97913 22.6984C9.25862 22.9634 9.60645 23.1544 9.98799 23.2523C11.3848 23.6135 17.0067 23.6135 17.0067 23.6135C17.0067 23.6135 22.6286 23.6135 24.0253 23.2523C24.4069 23.1544 24.7547 22.9634 25.0342 22.6984C25.3137 22.4334 25.5151 22.1036 25.6184 21.7418C26.064 19.3853 26.2014 15.8018 25.6069 13.5329V13.5328Z"
                  fill="currentColor"
                />
                <path
                  d="M15.2061 20.1986L19.8697 17.6374L15.2061 15.0762V20.1986Z"
                  fill="white"
                />
              </a>
            </svg>
          </div>
        </div>
        <div>
          <nav aria-labelledby="footer-programs" className="grid">
            <h2
              id="footer-programs"
              className="font-bold text-gold-500 uppercase lg:mb-8 my-3"
            >
              Programs
            </h2>
            <a
              href={`/programs/${programs['digital-marketing-master-class'].path.params.programName}`}
              className="whitespace-nowrap hover:underline"
            >
              Digital Marketing
            </a>
            <a
              href={`/programs/${programs['data-science-master-class'].path.params.programName}`}
              className="whitespace-nowrap hover:underline"
            >
              Data Science
            </a>
            <a
              href={`/programs/${programs['ui-ux-design-master-class'].path.params.programName}`}
              className="whitespace-nowrap hover:underline"
            >
              UI/UX Design
            </a>
          </nav>
        </div>

        <div>
          <nav aria-labelledby="footer-resources" className="grid">
            <h2
              id="footer-resources"
              className="font-bold text-gold-500 uppercase lg:mb-8 my-3"
            >
              Resources
            </h2>
            <Link href="/certificate">
              <a className="whitespace-nowrap hover:underline">Certificate</a>
            </Link>
            <Link href="/privacy-policy">
              <a className="whitespace-nowrap hover:underline">
                Privacy & Policy
              </a>
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="font-bold text-gold-500 uppercase lg:mb-8 my-3">
            TOUCH US
          </h2>
          <div>
            QarirLabs Office 8, level 18-A, Sudirman Central Business District
            (SCBD) Jl. Jenderal Sudirman no.1, RT8/RW3, Senayan, Kebayoran Baru,
            Jakarta Selatan. +62 813 8270 3250 (QarirLabs)
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        2022 Copyright PT. Konsula Karya Bangsa. All Right Reserved
      </div>
    </div>
  );
};

export { Footer };
