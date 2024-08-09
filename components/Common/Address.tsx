import React, { forwardRef } from 'react';
import styled from 'styled-components';
import LocationIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

const StyledContentSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

const StyledLocationIcon = styled(LocationIcon)`
  color: ${(props) => props.theme.palette.primary.main};
`;

interface AddressProps {
  href?: string;
}

const Address = forwardRef<HTMLSpanElement, AddressProps>(({ href, ...props }, ref) => {
  const content = (
    <StyledContentSpan ref={ref} {...props}>
      <StyledLocationIcon />
      ul. Wyszyńskiego 5, 14-200 Iława
    </StyledContentSpan>
  );

  return href ? (
    <Link href={href} passHref>
      {content}
    </Link>
  ) : content;
});

Address.displayName = 'Address';

export default Address;
