import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import specsData from '../data/specsData';
import logo from '../assets/images/logo.png';

const Image = styled.img`
  margin-right: 10px;
  width: 46px;
  height: 46px;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 18px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 14px;
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

const StyledLocationIcon = styled(LocationIcon)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const StyledPhoneIcon = styled(PhoneIcon)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const StyledMailIcon = styled(MailIcon)`
  color: ${(props) => props.theme.palette.primary.main};
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
`;

const AllRightsContainer = styled.div`
  padding: 40px 0;
  text-align: center;
  font-size: 14px;
`;

const specs = specsData.map((spec) => (
  <ListItem key={spec.id}>
    {spec.title}
  </ListItem>
));

const copyRightSymbol = String.fromCodePoint(0xA9);
const currentYear = new Date().getFullYear();
const allRightsReserved = `${copyRightSymbol} XXXX-${currentYear} Wika. Wszelkie prawa zastrzeżone.`;

const Footer = (): JSX.Element => (
  <Container>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <FlexContainer>
          <Image src={logo.src} alt="logo" />
          <Title>Lorem Ipsum</Title>
        </FlexContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere consequat nunc
          sit amet mollis. Maecenas mattis odio maximus tellus tempus, in pulvinar purus tempor.
        </Paragraph>
        <MediaContainer>
          <StyledFacebookIcon />
          <StyledInstagramIcon />
        </MediaContainer>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Title>Specjalizacje</Title>
        <FlexContainer>
          <List>
            {specs}
          </List>
        </FlexContainer>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Title>Kontakt</Title>
        <Paragraph>
          <StyledLocationIcon />
          Iławska 16/17, Iława
        </Paragraph>
        <Paragraph>
          <StyledPhoneIcon />
          666 666 666
        </Paragraph>
        <Paragraph>
          <StyledMailIcon />
          wiktoriasendzik@gmail.com
        </Paragraph>
      </Grid>
    </Grid>
    <AllRightsContainer>
      {allRightsReserved}
    </AllRightsContainer>
  </Container>
);

export default Footer;
