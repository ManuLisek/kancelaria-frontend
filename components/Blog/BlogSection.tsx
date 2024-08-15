import Link from 'next/link';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import Image from 'next/image';
import BlogCard from './BlogCard';
import { useData } from '../../context/DataContext';
import { formatDate } from '../../helpers/formatDate';
import Error from '../Common/Error';

const StyledBlogSection = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
  overflow: hidden;
  padding: 20px;

  @media (max-width: 899px) {
    flex-direction: column;
  }
`;

const StyledWrapperImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    filter: blur(2px);

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      content: "";
      background-color: ${(props) => props.theme.palette.common.black};
      opacity: .6;
    }
  }
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
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
  const { articles, hasError } = useData();

  if (hasError) {
    return (
      <Container>
        <Error>Przepraszamy, wystąpił błąd podczas ładowania artykułów.</Error>
      </Container>
    );
  }

  const sortedArticles = articles && articles.length > 0
    ? articles.filter((article) => article.id !== excludeId)
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    : [];
  const newestArticle = sortedArticles[0];
  const latestArticles = sortedArticles.slice(1, 4);

  return (
    <Container>
      <StyledBlogSection>
        <StyledWrapperImage>
          <Image src={newestArticle.image.src} alt={newestArticle.title} layout="fill" objectFit="cover" />
        </StyledWrapperImage>
        <StyledContent>
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
        </StyledContent>
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
