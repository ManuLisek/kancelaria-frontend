import Card from '@mui/material/Card';
import styled from 'styled-components';

const StyledSpec = styled(Card)`
  box-shadow: none;
  background-color: lightgoldenrodyellow;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  overflow: visible;
    
  &::before, &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
  }

  &::before {
    border-top: 4px solid #D99C2B;
    border-bottom: 4px solid #D99C2B;
    transform: scale3d(0,1,1);
  }

  &::after {
    border-left: 4px solid #D99C2B;
    border-right: 4px solid #D99C2B;
    transform: scale3d(1,0,1);
  }

  &:hover::before,
  &:hover::after {
    transform: scale3d(1,1,1);
    transition: transform .5s;
  }

  :hover > div, :hover > h3 {
    transform: scale(1.1);
  }

  @media (max-width: 599px) {
    font-size: 14px;
    padding: 12px;
  }
`;

const IconContainer = styled.div`
  color: #D99C2B;
  transition-duration: .5s;
`;

const Title = styled.h3`
  transition-duration: .5s;
`;

interface SpecProps {
  title: string;
  icon: JSX.Element;
}

const Spec = ({ title, icon }: SpecProps): JSX.Element => (
  <StyledSpec>
    <IconContainer>{icon}</IconContainer>
    <Title>{title}</Title>
  </StyledSpec>
);

export default Spec;
