import type { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../components/Button';
import axiosConfig from '../api/axiosConfig';
import AboutMeSection from '../components/AboutMeSection';
import BlogSection from '../components/BlogSection';
import Divider from '../components/Divider';
import Specs from '../components/Specs';
import books from '../assets/images/books.jpg';
import sculpture from '../assets/images/sculpture.jpg';
import { TransformedArticle } from '../types/articleTypes';
import { TransformedSpec } from '../types/specTypes';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

interface Props {
  articles: TransformedArticle[];
  specs: TransformedSpec[];
}

const Home: NextPage<Props> = ({ articles, specs }: Props) => (
  <>
    <AboutMeSection />
    <Divider image={books.src} title="Specjalizacje" />
    <Specs specs={specs} />
    <Divider image={sculpture.src} title="Potrzebujesz pomocy prawnej online? Skontaktuj się ze mną" />
    <BlogSection articles={articles} />
    <ButtonContainer>
      <Link href="/blog" passHref>
        <Button text="Więcej" />
      </Link>
    </ButtonContainer>
  </>
);

export default Home;

export async function getStaticProps() {
  const { data: articlesData } = await axiosConfig.getArticlesData();
  const latestArticles = articlesData.articles.slice(0, 3);
  const { data: specsData } = await axiosConfig.getSpecsData();

  return {
    props: {
      articles: latestArticles,
      specs: specsData.specs,
    },
  };
}
