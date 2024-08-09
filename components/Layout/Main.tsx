import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledMain = styled.main`
  min-height: calc(100vh - 120px - 80px - 306px);
  margin: 120px 0 80px;
`;

interface MainProps {
  children: ReactNode;
}
const Main = ({ children }: MainProps) => (
  <StyledMain>
    {children}
  </StyledMain>
);

export default Main;
