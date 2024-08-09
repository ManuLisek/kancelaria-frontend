import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';

const StyledContentSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const StyledPhoneIcon = styled(PhoneIcon)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const Phone = () => (
  <a href="tel:+48605899236">
    <StyledContentSpan>
      <StyledPhoneIcon />
      +48 605 899 236
    </StyledContentSpan>
  </a>
);

export default Phone;
