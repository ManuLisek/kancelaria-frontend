import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { Container } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import Specs from '../../components/Spec/Specs';
import Article from '../../components/Blog/Article/Article';
import ArticleTitle from '../../components/Blog/Article/ArticleTitle';
import ArticleSeeAlso from '../../components/Blog/Article/ArticleSeeAlso';
import axiosConfig from '../../api/axiosConfig';

interface Spec {
  id: number;
  name: string;
  content: string;
  slug: string;
}

interface Props {
  spec: Spec;
}

const SpecPage: NextPage<Props> = ({ spec }: Props) => (
  <>
    <Container maxWidth="md">
      {spec
        ? (
          <Article>
            <ArticleTitle>{spec.name}</ArticleTitle>
            <ReactMarkdown>{spec.content}</ReactMarkdown>
          </Article>
        )
        : (
          <div>Specjalizacja nie została znaleziona.</div>
        )}
    </Container>
    <ArticleSeeAlso />
    <Specs excludeId={Number(spec.id)} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await axiosConfig.getSpecsData();

    if (!data || !data.specs) {
      return { paths: [], fallback: false };
    }

    const paths = data.specs.map((spec: Spec) => ({
      params: { slug: spec.slug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const { slug } = params;

  try {
    const { data: specsData } = await axiosConfig.getSpecsData();
    const currentSpec = specsData.specs.find((spec: Spec) => spec.slug === slug);

    if (!currentSpec) {
      return { notFound: true };
    }

    const { data } = await axiosConfig.getSpecData(currentSpec.id);
    if (!data) {
      return { notFound: true };
    }

    return {
      props: {
        spec: data.spec,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default SpecPage;
