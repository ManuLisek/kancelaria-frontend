import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import Button from './Button';
import books from '../assets/images/books.jpg';
import sculpture from '../assets/images/sculpture.jpg';

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

const BlogSection = () => (
  <Container>
    <StyledGrid
      container
      rowSpacing={4}
      columnSpacing={2}
      alignItems="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <BlogCard title="Prawo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere consequat nunc sit amet mollis. Maecenas mattis odio maximus tellus tempus, in pulvinar purus tempor. Suspendisse a arcu placerat, lacinia neque eu, sagittis ante. Donec pretium tortor sed lacus commodo, ornare convallis dui sodales. In posuere erat quis diam dapibus, eu interdum sem pulvinar." image={books.src} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <BlogCard title="I" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere consequat nunc sit amet mollis. Maecenas mattis odio maximus tellus tempus, in pulvinar purus tempor. Suspendisse a arcu placerat, lacinia neque eu, sagittis ante. Donec pretium tortor sed lacus commodo, ornare convallis dui sodales. In posuere erat quis diam dapibus, eu interdum sem pulvinar." image={sculpture.src} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <BlogCard title="Sprawiedliwość" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere consequat nunc sit amet mollis. Maecenas mattis odio maximus tellus tempus, in pulvinar purus tempor. Suspendisse a arcu placerat, lacinia neque eu, sagittis ante. Donec pretium tortor sed lacus commodo, ornare convallis dui sodales. In posuere erat quis diam dapibus, eu interdum sem pulvinar." image={books.src} />
      </Grid>
    </StyledGrid>
    <ButtonContainer>
      <Button href="#" text="Więcej" />
    </ButtonContainer>
  </Container>
);

export default BlogSection;
