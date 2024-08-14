import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledMain = styled.main`
  min-height: calc(100vh - 80px - 80px - 70px - 324px);
  margin-top: 80px;
  padding-bottom: 80px;
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
