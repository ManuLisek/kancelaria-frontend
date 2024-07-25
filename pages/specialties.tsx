import type { NextPage } from 'next';
import axiosConfig from '../api/axiosConfig';
import Specs from '../components/Specs';
import { TransformedSpec } from '../types/specTypes';

interface Props {
  specs: TransformedSpec[];
}

const Specialties: NextPage<Props> = ({ specs }: Props) => (
  <main>
    <Specs specs={specs} />
  </main>
);

export default Specialties;

export async function getStaticProps() {
  const { data: specsData } = await axiosConfig.getSpecsData();

  return {
    props: {
      specs: specsData.specs,
    },
  };
}
