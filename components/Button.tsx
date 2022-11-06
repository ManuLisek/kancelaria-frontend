import Button from '@mui/material/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

interface ButtonProps {
  href: string;
  text: string;
}

const ButtonComponent = ({ href, text }: ButtonProps): JSX.Element => (
  <StyledButton href={href} variant="contained">
    { text }
  </StyledButton>
);

export default ButtonComponent;
