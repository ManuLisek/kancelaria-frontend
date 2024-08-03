import styled from 'styled-components';
import { Container } from '@mui/material';

const StyledHeader = styled.h2`
  margin-bottom: 20px;
`;

const ArticleSeeAlso = () => (
  <Container>
    <StyledHeader>Zobacz również</StyledHeader>
  </Container>
);

export default ArticleSeeAlso;
