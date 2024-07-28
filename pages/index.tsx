import type { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../components/Button';
import AboutMeSection from '../components/AboutMeSection';
import BlogSection from '../components/BlogSection';
import Divider from '../components/Divider';
import Specs from '../components/Specs';
import books from '../assets/images/books.jpg';
import sculpture from '../assets/images/sculpture.jpg';

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
    <Divider image={books.src} title="Specjalizacje" />
    <Specs />
    <Divider image={sculpture.src} title="Potrzebujesz pomocy prawnej online? Skontaktuj się ze mną" />
    <BlogSection />
    <ButtonContainer>
      <Link href="/blog" passHref>
        <Button text="Więcej" />
      </Link>
    </ButtonContainer>
  </>
);

export default HomePage;
