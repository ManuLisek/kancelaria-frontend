import React, { forwardRef } from 'react';
import Container from '@mui/material/Container';
import styled from 'styled-components';

const DividerContainer = styled.div<DividerContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  padding: 40px 0;
  width: 100%;
  border-bottom-right-radius: 70px;
  background: url(${(props) => props.image}) no-repeat fixed;
  background-size: cover;
  cursor: pointer;
  z-index: -1;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.palette.common.black};
    opacity: 0.6;
    content: "";
    z-index: -2;
  }

  @media (max-width: 599px) {
    margin-bottom: 30px;
    padding: 20px 0;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  color: ${(props) => props.theme.palette.common.white};
  font-weight: bold;

  @media (max-width: 599px) {
    font-size: 28px;
  }
`;

interface DividerContainerProps {
  image: string;
}

interface DividerProps extends DividerContainerProps {
  title: string;
  image: string;
}
const Divider = forwardRef<HTMLDivElement, DividerProps>(({ title, image, ...props }, ref) => (
  <DividerContainer ref={ref} image={image} {...props}>
    <Container>
      <Title>{title}</Title>
    </Container>
  </DividerContainer>
));

export default Divider;
