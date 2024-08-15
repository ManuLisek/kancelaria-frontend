import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledError = styled.p`
  margin-bottom: 40px;
  text-align: center;
`;

interface ErrorProps {
  children: ReactNode;
}

const Error = ({ children }:ErrorProps) => (
  <StyledError>
    {children}
  </StyledError>
);

export default Error;
