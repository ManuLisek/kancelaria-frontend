import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useData } from '../../context/DataContext';

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { articles } = useData();

  const currentArticle = articles.find((article) => article.id.toString() === id);

  return (
    <main>
      {currentArticle
      && (
      <>
        <h1>{currentArticle.title}</h1>
        <div>{currentArticle.content}</div>
      </>
      )}

    </main>
  );
};

export default ArticlePage;
