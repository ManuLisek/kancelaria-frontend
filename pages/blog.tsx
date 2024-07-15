import type { NextPage } from 'next';
import axiosConfig from '../api/axiosConfig';
import BlogSection from '../components/BlogSection';
import { TransformedArticle } from '../types/articleTypes';

interface Props {
  articles: TransformedArticle[];
}

const Home: NextPage<Props> = ({ articles }: Props) => (
  <main>
    <BlogSection articles={articles} />
  </main>
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
