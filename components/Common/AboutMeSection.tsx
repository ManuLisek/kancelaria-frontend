import Container from '@mui/material/Container';
import styled from 'styled-components';
import me from '../../assets/images/me.jpg';

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Image = styled.img`
  display: block;
  float: left;
  width: 220px;
  height: auto;
  margin-right: 20px;
  border: 6px solid ${(props) => props.theme.palette.primary.main};

  @media (max-width: 599px) {
    float: none;
    margin: 0 auto 20px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  text-align: justify;
`;

const ClearBoth = styled.div`
  clear: both;
`;

const AboutMeSection = (): JSX.Element => (
  <Container>
    <Title>O mnie</Title>
    <Image src={me.src} alt="me" />
    <Paragraph>
      Adwokat Wiktoria Sendzik- jestem absolwentką Uniwersytetu Warmińsko-Mazurskiego w Olsztynie
      Wydziału Prawa i Administracji. Ukończyłam aplikację adwokacką, po której zostałam wpisana
      na listę adwokatów Okręgowej Rady Adwokackiej w Olsztynie.
    </Paragraph>
    <Paragraph>
      Od pierwszej klasy gimnazjum wiedziałam, że jedynym zawodem, który będzie
      sprawiał mi satysfakcję jest zawód adwokata- jako profesja wolna, niezależna
      stała się moim marzeniem, do którego uparcie dążyłam przez wiele lat. Wykonywanie
      tego zawodu daje mi motywację i siłę do tego, aby robić to profesjonalnie i dynamicznie
      dbać o interesy moich klientów. Do zawodu adwokata przyciągnął mnie jego ekspresyjny
      charakter, jego różnorodność i ciągła dynamika.
    </Paragraph>
    <Paragraph>
      Adwokat to zawód zaufania publicznego. Rzetelność, zaangażowanie i profesjonalizm pozwala
      na prawidłowe wykonywanie zawodu adwokata i stanowi gwarancję zadowolenia klientów - to główne
      zasady, którymi się kieruję.
    </Paragraph>
    <Paragraph>
      Bardzo szanuję swoich klientów, bo jestem świadoma tego, że powierzają mi sprawy swojego
      życia, często bardzo delikatne, osobiste, trudne.
    </Paragraph>
    <ClearBoth />
    <Paragraph>
      Zapraszam do zapoznania się z ofertą mojej Kancelarii i skorzystania z moich usług.
    </Paragraph>
    <Paragraph>
      adwokat
      <br />
      Wiktoria Sendzik
    </Paragraph>
  </Container>
);

export default AboutMeSection;
