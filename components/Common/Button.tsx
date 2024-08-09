import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

interface ButtonProps {
  text: string;
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(({ text, ...props }, ref) => (
  <StyledButton ref={ref} variant="contained" {...props}>
    {text}
  </StyledButton>
));

export default ButtonComponent;
