import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledArticleTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 28px;

  @media (max-width: 599px) {
    font-size: 24px;
  }
`;

interface ArticleTitleProps {
  children: ReactNode;
}

const ArticleTitle = ({ children }:ArticleTitleProps) => (
  <StyledArticleTitle>
    {children}
  </StyledArticleTitle>
);

export default ArticleTitle;
