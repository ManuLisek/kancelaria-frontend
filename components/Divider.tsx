import Container from '@mui/material/Container';
import styled from 'styled-components';

const DividerContainer = styled.div<DividerContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  padding: 40px 0px;
  width: 100%;
  border-bottom-right-radius: 70px;
  background: url(${(props) => props.image}) no-repeat fixed;
  background-size: cover;

  @media (max-width: 599px) {
    margin-bottom: 30px;
    padding: 20px 0px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: white;

  @media (max-width: 599px) {
    font-size: 28px;
  }
`;

interface DividerContainerProps {
  image: string;
}

interface DividerProps extends DividerContainerProps {
  title: string;
}

const Divider = ({ title, image }: DividerProps): JSX.Element => (
  <DividerContainer image={image}>
    <Container>
      <Title>{title}</Title>
    </Container>
  </DividerContainer>
);

export default Divider;
