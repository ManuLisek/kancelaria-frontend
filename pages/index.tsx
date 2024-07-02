import type { NextPage } from 'next';
import axiosConfig from '../api/axiosConfig';
import AboutMeSection from '../components/AboutMeSection';
import BlogSection from '../components/BlogSection';
import Divider from '../components/Divider';
import Specs from '../components/Specs';
import books from '../assets/images/books.jpg';
import sculpture from '../assets/images/sculpture.jpg';
import { TransformedArticle } from '../types/articleTypes';

interface Props {
  articles: TransformedArticle[];
}

const Home: NextPage<Props> = ({ articles }: Props) => (
  <>
    <AboutMeSection />
    <Divider image={books.src} title="Specjalizacje" />
    <Specs />
    <Divider image={sculpture.src} title="Potrzebujesz pomocy prawnej online? Skontaktuj się ze mną" />
    <BlogSection articles={articles} />
  </>
);

export default Home;

export async function getStaticProps() {
  const { data } = await axiosConfig.getArticlesData();

  return {
    props: {
      articles: data.articles,
    },
  };
}
