import Image from 'next/image';

const Logo = ({ variant }: { variant: 'white' | 'blue' }) => {
  return (
    <Image
      src={`/assets/images/logo-${variant}.svg`}
      width={161}
      height={38}
      alt="Qarirlabs Logo"
    />
  );
};

export default Logo;
