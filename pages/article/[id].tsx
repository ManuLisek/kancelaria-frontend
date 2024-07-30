import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useData } from '../../context/DataContext';

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { articles } = useData();

  const currentArticle = articles.find((article) => article.id.toString() === id);

  return (
    currentArticle
      ? (
        <>
          <h1>{currentArticle.title}</h1>
          <div>{currentArticle.content}</div>
        </>
      )
      : <div>Artykuł nie został znaleziony.</div>
  );
};

export default ArticlePage;
