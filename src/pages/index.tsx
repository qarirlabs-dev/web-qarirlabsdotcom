import AdvantagesSection from '../components/homepage/AdvantagesSection';
import AlumniStorySection from '../components/homepage/AlumniStorySection';
import GraduateCompanies from '../components/homepage/GraduateCompanies';
import Header from '../components/homepage/Header';
import ProgramSection from '../components/homepage/ProgramSection';
import { Meta } from '../components/layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <GraduateCompanies className="mt-40 text-center" />
      <AdvantagesSection />
      <ProgramSection />
      <AlumniStorySection />
    </>
  );
};

export default Index;
