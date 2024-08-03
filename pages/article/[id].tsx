import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useData } from '../../context/DataContext';
import BlogSection from '../../components/BlogSection';
import { formatDate } from '../../helpers/formatDate';
import Article from '../../components/Article';
import ArticleTitle from '../../components/ArticleTitle';
import ArticleSeeAlso from '../../components/ArticleSeeAlso';

const StyledDate = styled.p`
  margin-bottom: 40px;
`;

const StyledImgWrapper = styled.div`
  width: 540px;
  height: 400px;
  margin: 0 auto 40px;

  @media (max-width: 599px) {
    width: 280px;
    height: 200px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { articles } = useData();
  const currentArticle = articles.find((article) => article.id.toString() === id);

  return (
    <>
      <Container maxWidth="md">
        {currentArticle
          ? (
            <Article>
              <ArticleTitle>{currentArticle.title}</ArticleTitle>
              <StyledDate>{formatDate(currentArticle.publishedAt)}</StyledDate>
              <StyledImgWrapper>
                <StyledImg src={currentArticle.image.src} alt={currentArticle.image.alt} />
              </StyledImgWrapper>
              <ReactMarkdown>{currentArticle.content}</ReactMarkdown>
            </Article>

          )
          : (
            <div>Artykuł nie został znaleziony.</div>
          )}
      </Container>
      <ArticleSeeAlso />
      <BlogSection excludeId={Number(id)} />
    </>
  );
};

export default ArticlePage;
