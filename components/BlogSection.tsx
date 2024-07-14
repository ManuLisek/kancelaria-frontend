import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import Button from './Button';

const StyledGrid = styled(Grid)`

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

interface Image {
  src: string;
  alt: string;
}

interface TransformedArticle {
  key: number;
  title: string;
  id: number;
  content: string;
  description: string;
  image: Image;
}

interface BlogSectionProps {
  articles: TransformedArticle[];
}

const BlogSection = ({ articles }: BlogSectionProps) => (
  <Container>
    <StyledGrid
      container
      rowSpacing={4}
      columnSpacing={2}
      alignItems="center"
    >
      {articles.map((article) => (
        <Grid key={article.key} item xs={12} sm={6} md={4}>
          <BlogCard
            id={article.id}
            title={article.title}
            description={article.description}
            image={article.image.src}
          />
        </Grid>
      ))}
    </StyledGrid>
    <ButtonContainer>
      <Button href="#" text="Więcej" />
    </ButtonContainer>
  </Container>
);

export default BlogSection;
