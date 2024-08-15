import styled from 'styled-components';
import hero from 'public/law.jpg';

const StyledHero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh + 40px);
  margin: -190px 0 60px;
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;
  z-index: -1;
  overflow: hidden;

  &:before {
    position: absolute;
    content: "";
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background-image: url(${hero.src});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    filter: blur(2px);
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.palette.common.black};
    z-index: -1;
    opacity: .6;
  }
`;

const StyledTitle = styled.h1`
  font-size: 36px;

  @media (max-width: 699px) {
    font-size: 28px;
  }
`;

const StyledSubtitle = styled.p`
  margin-bottom: 40px;
  font-size: 28px;

  @media (max-width: 699px) {
    font-size: 24px;
  }
`;

const HeroSection = (): JSX.Element => (
  <StyledHero className="hero">
    <div>
      <StyledSubtitle>&quot;Advocatus non accusat - adwokat nie oskarża&quot;</StyledSubtitle>
      <StyledTitle>
        Kancelaria Adwokacka
        <br />
        Adwokat Wiktoria Sendzik
      </StyledTitle>
    </div>

  </StyledHero>

);

export default HeroSection;
