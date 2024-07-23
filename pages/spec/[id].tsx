import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import axiosConfig from '../../api/axiosConfig';
import { TransformedSpec } from '../../types/specTypes';

interface Props {
  spec: TransformedSpec;
}

const SpecPage: NextPage<Props> = ({ spec }: Props) => (
  <main>
    <h1>{spec.name}</h1>
    <div>{spec.content}</div>
  </main>
);

export default SpecPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axiosConfig.getSpecsData();

  const paths = data.specs?.map((spec: TransformedSpec) => ({
    params: { id: spec.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await axiosConfig.getSpecData(`${params?.id}`);
  const { spec } = data;

  return {
    props: {
      spec,
    },
  };
};
