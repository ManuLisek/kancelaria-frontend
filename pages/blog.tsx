import type { NextPage } from 'next';
import { Container } from '@mui/material';
import styled from 'styled-components';
import { useData } from '../context/DataContext';
import BlogCard from '../components/BlogCard';

const StyledBlogTitle = styled.h1`
  margin-bottom: 40px;
  text-align: center;
`;

const StyledArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const BlogPage: NextPage = () => {
  const { articles } = useData();

  return (
    <Container>
      <StyledBlogTitle>Blog prawny</StyledBlogTitle>
      <StyledArticlesContainer>
        {articles.map((article) => (
          <BlogCard
            key={article.id}
            id={article.id}
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
