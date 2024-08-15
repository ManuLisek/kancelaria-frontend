import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useData } from '../../context/DataContext';
import Address from '../Common/Address';
import Phone from '../Common/Phone';
import Email from '../Common/Email';
import Logo from '../Common/Logo';

const StyledFooter = styled.footer`
  height: fit-content;
  padding-top: 32px;
  border-top: 1px solid ${(props) => props.theme.palette.primary.main};
`;

const StyledLink = styled.a`
  display: block;
  margin-bottom: 10px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
  font-size: 14px;

  span {
    cursor: pointer;
  }
`;

const MediaContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledFacebookIcon = styled(FacebookIcon)`
  color: #3b5998;
`;

const StyledInstagramIcon = styled(InstagramIcon)`
  color: #f58529;
`;

const List = styled.ul`
  columns: 2;

  @media (max-width: 899px) {
    columns: 1;
  }
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
  list-style-type: none;
  cursor: pointer;
`;

const AllRightsContainer = styled.div`
  padding: 40px 0;
  text-align: center;
  font-size: 14px;
`;

const copyRightSymbol = String.fromCodePoint(0xA9);
const currentYear = new Date().getFullYear();
const allRightsReserved = `${copyRightSymbol} ${currentYear}. Wszelkie prawa zastrzeżone.`;

const Footer = (): JSX.Element => {
  const { specs, hasError } = useData();

  const specsList = specs.map((spec) => (
    <Link href={`/specjalizacje/${spec.slug}`} key={spec.id}>
      <ListItem>
        {spec.name}
      </ListItem>
    </Link>
  ));

  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FlexContainer>
              <Logo />
              <Link href="/" passHref>
                <StyledLink>
                  Kancelaria Adwokacka
                  <br />
                  Adwokat Wiktoria Sendzik
                </StyledLink>
              </Link>
            </FlexContainer>
            <Paragraph>
              Dowiedz się więcej z moich mediów społecznościowych.
            </Paragraph>
            <MediaContainer>
              <a
                href="https://www.facebook.com/p/Kancelaria-Adwokacka-Adwokat-Wiktoria-Sendzik-100086098846467/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebok"
              >
                <StyledFacebookIcon />
              </a>
              <StyledInstagramIcon />
            </MediaContainer>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href="/specjalizacje" passHref>
              <StyledLink>Specjalizacje</StyledLink>
            </Link>
            <FlexContainer>
              <List>
                {hasError ? (
                  <div>Błąd pobierania danych.</div>
                ) : (
                  specsList
                )}
              </List>
            </FlexContainer>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href="/kontakt" passHref>
              <StyledLink>
                Kontakt
              </StyledLink>
            </Link>
            <Paragraph>
              <Address href="/kontakt" />
            </Paragraph>
            <Paragraph>
              <Phone />
            </Paragraph>
            <Paragraph>
              <Email />
            </Paragraph>
          </Grid>
        </Grid>
        <AllRightsContainer>
          {allRightsReserved}
        </AllRightsContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
