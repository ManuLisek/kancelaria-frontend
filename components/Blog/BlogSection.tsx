import Link from 'next/link';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import { useData } from '../../context/DataContext';
import { formatDate } from '../../helpers/formatDate';

interface StyledBlogSectionProps {
  backgroundImage: string;
}

const StyledBlogSection = styled.div<StyledBlogSectionProps>`
  display: flex;
  gap: 30px;
  position: relative;
  overflow: hidden;
  padding: 20px;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    filter: blur(2px);
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background-color: black;
    z-index: -1;
    opacity: .3;
  }

  @media (max-width: 899px) {
    flex-direction: column;
  }
`;

const StyledNewestArticleTitle = styled.h3`
  display: inline;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 599px) {
    font-size: 20px
  }
`;

const StyledNewestArticleDate = styled.p`
  margin: 10px 0 20px;
`;

const StyledNewestArticleContent = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
`;

const StyledArticles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const StyledReadMoreButton = styled.span`
  color: ${(props) => props.theme.palette.primary.main};
  cursor: pointer;
`;

interface BlogSectionProps {
  excludeId?: number;
}

const BlogSection = ({ excludeId }: BlogSectionProps) => {
  const { articles } = useData();
  const sortedArticles = articles
    .filter((article) => article.id !== excludeId)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const newestArticle = sortedArticles[0];
  const latestArticles = sortedArticles.slice(1, 4);

  return (
    <Container>
      <StyledBlogSection backgroundImage={newestArticle.image.src}>
        <div>
          <Link href={`/blog-prawny/${newestArticle.slug}`}>
            <StyledNewestArticleTitle>{newestArticle.title}</StyledNewestArticleTitle>
          </Link>
          <StyledNewestArticleDate>{formatDate(newestArticle.publishedAt)}</StyledNewestArticleDate>
          <StyledNewestArticleContent>
            {newestArticle.content}
          </StyledNewestArticleContent>
          <Link href={`/blog-prawny/${newestArticle.slug}`}>
            <StyledReadMoreButton>
              Czytaj dalej &gt;
            </StyledReadMoreButton>
          </Link>
        </div>
        <StyledArticles>
          {latestArticles.map((article) => (
            <BlogCard
              key={article.id}
              slug={article.slug}
              title={article.title}
              publishedAt={article.publishedAt}
              image={article.image.src}
            />
          ))}
        </StyledArticles>
      </StyledBlogSection>
    </Container>
  );
};

export default BlogSection;
