import Card from '@mui/material/Card';
import styled from 'styled-components';

const StyledSpec = styled(Card)`
  box-shadow: none;
  background-color: ${(props) => props.theme.palette.secondary.main};
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
    border-top: 4px solid ${(props) => props.theme.palette.primary.main};
    border-bottom: 4px solid ${(props) => props.theme.palette.primary.main};
    transform: scale3d(0,1,1);
  }
  &::after {
    border-left: 4px solid ${(props) => props.theme.palette.primary.main};
    border-right: 4px solid ${(props) => props.theme.palette.primary.main};
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

const Title = styled.h3`
  transition-duration: .5s;
`;

interface SpecProps {
  name: string;
}

const Spec = ({ name }: SpecProps): JSX.Element => (
  <StyledSpec>
    <Title>{name}</Title>
  </StyledSpec>
);

export default Spec;
