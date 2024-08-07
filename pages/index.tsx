import type { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../components/Button';
import AboutMeSection from '../components/AboutMeSection';
import BlogSection from '../components/BlogSection';
import Divider from '../components/Divider';
import Specs from '../components/Specs';
import sculpture from '../assets/images/sculpture.jpg';

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const HomePage: NextPage = () => (
  <>
    <AboutMeSection />
    <Link href="/pomoc-prawna-online" passHref>
      <Divider image={sculpture.src} title="Potrzebujesz pomocy prawnej online? Skontaktuj się ze mną." />
    </Link>
    <Title>Specjalizacje</Title>
    <Specs />
    <BlogSection />
    <ButtonContainer>
      <Link href="/blog-prawny" passHref>
        <Button text="Więcej" />
      </Link>
    </ButtonContainer>
  </>
);

export default HomePage;
