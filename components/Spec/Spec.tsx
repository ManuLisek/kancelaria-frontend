import Link from 'next/link';
import styled from 'styled-components';

const StyledSpec = styled.div`
  box-shadow: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 120px;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  cursor: pointer;
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
  slug: string;
  name: string;
}

const Spec = ({ slug, name }: SpecProps): JSX.Element => (
  <Link href={`/specjalizacje/${slug}`}>
    <StyledSpec>
      <StyledTitle>{name}</StyledTitle>
    </StyledSpec>
  </Link>
);

export default Spec;
