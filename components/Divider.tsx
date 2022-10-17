import styled from 'styled-components';

const DividerContainer = styled.div<DividerContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 60px;
  width: 100%;
  border-bottom-right-radius: 70px;
  font-size: 48px;
  font-weight: bold;
  color: white;
  background: url(${(props)=> props.image}) no-repeat fixed;
  background-size: cover;
`;

interface DividerContainerProps {
  image: string;
}

interface DividerProps extends DividerContainerProps {
  title: string;
};

const Divider = ({title, image}: DividerProps): JSX.Element => {

  return (
    <DividerContainer image={image}>{title}</DividerContainer>
  )
};

export default Divider;