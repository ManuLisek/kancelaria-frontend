import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledPageTitle = styled.h1`
  margin-bottom: 40px;
  text-align: center;
  font-size: 28px;
`;

interface ArticleTitleProps {
  children: ReactNode;
}

const PageTitle = ({ children }:ArticleTitleProps) => (
  <StyledPageTitle>
    {children}
  </StyledPageTitle>
);

export default PageTitle;
