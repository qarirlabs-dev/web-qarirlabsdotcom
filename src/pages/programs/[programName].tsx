import { GetStaticProps } from 'next';

import GraduateCompanies from '../../components/homepage/GraduateCompanies';
import AboutProgram from '../../components/programs/AboutProgram';
import NavBar from '../../components/programs/NavBar';
import ProgramFaq from '../../components/programs/ProgramFaq';
import ProgramFee from '../../components/programs/ProgramFee';
import ProgramMaterial from '../../components/programs/ProgramMaterial';
import ProgramMentor from '../../components/programs/ProgramMentor';
import ProgramReview from '../../components/programs/ProgramReview';
import ProgramSchedule from '../../components/programs/ProgramSchedule';
import ProgramsHeader from '../../components/programs/ProgramsHeader';
import { getProgram, getProgramParams, Program } from '../../data/programs';

export default function ProgramPage({ programData }: { programData: Program }) {
  return (
    <>
      <ProgramsHeader {...programData} />
      <GraduateCompanies
        className="lg:pt-16 pt-8 pl-4 lg:text-center text-left"
        withLineBreak
      />
      <NavBar />
      <AboutProgram {...programData} />
      <ProgramSchedule {...programData} />
      <ProgramMaterial {...programData} />
      <ProgramMentor {...programData} />
      <ProgramFee {...programData} />
      <ProgramReview {...programData} />
      <ProgramFaq {...programData} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getProgramParams();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const programData = getProgram(context);
  return {
    props: {
      programData,
    },
  };
};
