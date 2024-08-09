import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Container } from '@mui/material';
import styled from 'styled-components';
import PageTitle from '../components/Common/PageTitle';
import Address from '../components/Common/Address';
import Phone from '../components/Common/Phone';
import Email from '../components/Common/Email';

const StyledContactContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 899px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
  padding-left: 40px;
  border-left: 1px solid ${(props) => props.theme.palette.primary.main};

  @media (max-width: 899px) {
    margin-left: -60px;
  }

  @media (max-width: 599px) {
    margin-left: 0;
    padding-left: 15px;
  }
`;

const StyledTitle = styled.h2`
  margin-bottom: 20px;

  @media (max-width: 599px) {
    font-size: 20px;
  }
`;

const MapComponent = dynamic(() => import('../components/Common/MapComponent'), {
  ssr: false,
});

const ContactPage: NextPage = () => (
  <>
    <PageTitle>Kontakt</PageTitle>
    <Container maxWidth="md">
      <StyledContactContainer>
        <MapComponent />
        <StyledContactInfoContainer>
          <StyledTitle>
            Kancelaria Adwokacka
            <br />
            Adwokat Wiktoria Sendzik
          </StyledTitle>
          <Address />
          <Phone />
          <Email />
        </StyledContactInfoContainer>
      </StyledContactContainer>
    </Container>
  </>
);

export default ContactPage;
