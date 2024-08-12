import styled from 'styled-components';
import { Container } from '@mui/material';
import me from '../../assets/images/me.jpg';

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const StyledFlexContainer = styled(Container)`
  display: flex;
  margin-bottom: 60px;

  @media (max-width: 899px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const StyledImageWrapper = styled.div`
  flex: 1 1 0;
  background-image: url(${me.src});
  background-size: cover;
  background-position: center center;
  border: 4px solid ${(props) => props.theme.palette.primary.main};

  @media (max-width: 899px) {
    width: 300px;
    min-height: 400px;
  }
`;

const StyledInfoWrapper = styled.div`
  flex: 1 1 0;
  padding: 0 30px;

  @media (max-width: 899px) {
    padding: 0;
  }
`;

// const Image = styled.img`
//   display: block;
//   float: left;
//   width: 220px;
//   height: auto;
//   margin-right: 20px;
//   border: 6px solid ${(props) => props.theme.palette.primary.main};

//   @media (max-width: 599px) {
//     float: none;
//     margin: 0 auto 20px;
//   }
// `;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const AboutMeSection = (): JSX.Element => (
  <>
    <Title>O mnie</Title>
    <StyledFlexContainer>
      <StyledImageWrapper />
      {/* <Image src={me.src} alt="me" /> */}
      <StyledInfoWrapper>
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
        <Paragraph>
          Zapraszam do zapoznania się z ofertą mojej Kancelarii i skorzystania z moich usług.
        </Paragraph>
        <Paragraph>
          adwokat
          <br />
          Wiktoria Sendzik
        </Paragraph>
      </StyledInfoWrapper>
    </StyledFlexContainer>
  </>

);

export default AboutMeSection;
