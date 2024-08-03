import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Container } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { useData } from '../../context/DataContext';
import Specs from '../../components/Specs';
import Article from '../../components/Article';
import ArticleTitle from '../../components/ArticleTitle';
import ArticleSeeAlso from '../../components/ArticleSeeAlso';

const SpecPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { specs } = useData();
  const currentSpec = specs.find((spec) => spec.id.toString() === id);

  return (
    <>
      <Container maxWidth="md">
        {currentSpec
          ? (
            <Article>
              <ArticleTitle>{currentSpec.name}</ArticleTitle>
              <ReactMarkdown>{currentSpec.content}</ReactMarkdown>
            </Article>
          )
          : (
            <div>Specjalizacja nie została znaleziona.</div>
          )}
      </Container>
      <ArticleSeeAlso />
      <Specs excludeId={Number(id)} />
    </>
  );
};

export default SpecPage;
