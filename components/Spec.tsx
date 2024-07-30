import Link from 'next/link';
import Card from '@mui/material/Card';
import styled from 'styled-components';

const StyledSpec = styled(Card)`
  box-shadow: none;
  background-color: ${(props) => props.theme.palette.secondary.main};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 120px;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    top: -150px;
    right: -150px;
    content: '';
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.palette.primary.main};
    transition: .5s ease;
  }

  &:hover {
    &::before {
      transform: scale(10);
    }
  }

  @media (max-width: 599px) {
    min-height: 108px;
    font-size: 14px;
  }
`;

const StyledTitle = styled.h3`
  z-index: 2;
`;

interface SpecProps {
  id: number;
  name: string;
}

const Spec = ({ id, name }: SpecProps): JSX.Element => (
  <Link href={`/spec/${id}`}>
    <StyledSpec>
      <StyledTitle>{name}</StyledTitle>
    </StyledSpec>
  </Link>
);

export default Spec;
