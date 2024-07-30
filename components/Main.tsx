import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledMain = styled.main`
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
