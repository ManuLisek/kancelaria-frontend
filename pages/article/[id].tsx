import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import { useData } from '../../context/DataContext';
import BlogSection from '../../components/BlogSection';

const StyledContainer = styled(Container)`
  margin-bottom: 100px;
`;
const StyledArticleTitle = styled.h1`
  margin-bottom: 20px;

  @media (max-width: 599px) {
    font-size: 24px;
  }
`;

const StyledDate = styled.p`
  margin-bottom: 40px;
`;

const StyledArticleParagraph = styled.p`
  margin-bottom: 20px;
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

const StyledHeader = styled.h2`
  margin-bottom: 20px;
`;

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { articles } = useData();

  const currentArticle = articles.find((article) => article.id.toString() === id);
  const content = currentArticle?.content.map((paragraph) => (
    <StyledArticleParagraph key={paragraph.children.map((child) => child.text).join('-')}>
      {paragraph.children.map((child) => (
        <span key={child.text}>{child.text}</span>
      ))}
    </StyledArticleParagraph>
  ));

  return (
    <>
      {currentArticle ? (
        <StyledContainer maxWidth="md">
          <StyledArticleTitle>{currentArticle.title}</StyledArticleTitle>
          <StyledDate>{currentArticle.publishedAt}</StyledDate>
          <StyledImgWrapper>
            <StyledImg src={currentArticle.image.src} alt={currentArticle.image.alt} />
          </StyledImgWrapper>
          {content}
        </StyledContainer>
      ) : (
        <div>Artykuł nie został znaleziony.</div>
      )}
      <Container>
        <StyledHeader>Zobacz również</StyledHeader>
      </Container>
      <BlogSection />
    </>
  );
};

export default ArticlePage;
