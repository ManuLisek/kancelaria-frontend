import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import axiosConfig from '../../api/axiosConfig';
import { TransformedArticle } from '../../types/articleTypes';

interface Props {
  article: TransformedArticle;
}

const ArticlePage: NextPage<Props> = ({ article }: Props) => (
  <main>
    <h1>{article.title}</h1>
    <div>{article.content}</div>
  </main>
);

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axiosConfig.getArticlesData();

  const paths = data.articles?.map((article: TransformedArticle) => ({
    params: { id: article.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await axiosConfig.getArticleData(`${params?.id}`);
  const { article } = data;

  return {
    props: {
      article,
    },
  };
};
