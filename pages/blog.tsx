import type { NextPage } from 'next';
import { Container } from '@mui/material';
import styled from 'styled-components';
import Error from '../components/Common/Error';
import { useData } from '../context/DataContext';
import BlogCard from '../components/Blog/BlogCard';
import PageTitle from '../components/Common/PageTitle';

const StyledArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const BlogPage: NextPage = () => {
  const { articles, hasError } = useData();

  if (hasError) {
    return (
      <Container>
        <PageTitle>Blog prawny</PageTitle>
        <Error>Przepraszamy, wystąpił błąd podczas ładowania artykułów.</Error>
      </Container>
    );
  }

  const sortedArticles = articles && articles.length > 0
    ? articles.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    : [];

  return (
    <Container>
      <PageTitle>Blog prawny</PageTitle>
      <StyledArticlesContainer>
        {sortedArticles.map((article) => (
          <BlogCard
            key={article.id}
            slug={article.slug}
            title={article.title}
            publishedAt={article.publishedAt}
            image={article.image.src}
          />
        ))}
      </StyledArticlesContainer>
    </Container>
  );
};

export default BlogPage;
