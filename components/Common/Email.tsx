import styled from 'styled-components';
import MailIcon from '@mui/icons-material/Mail';

const StyledContentSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const StyledMailIcon = styled(MailIcon)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const Email = () => (
  <a href="mailto:adwokat.wiktoriasendzik@gmail.com">
    <StyledContentSpan>
      <StyledMailIcon />
      adwokat.wiktoriasendzik@gmail.com
    </StyledContentSpan>
  </a>
);

export default Email;
