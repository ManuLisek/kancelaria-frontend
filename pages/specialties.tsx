import type { NextPage } from 'next';
import Specs from '../components/Spec/Specs';
import PageTitle from '../components/Common/PageTitle';

const SpecialtiesPage: NextPage = () => (
  <>
    <PageTitle>Specjalizacje</PageTitle>
    <Specs />
  </>
);

export default SpecialtiesPage;
