import type { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import sculpture from 'public/sculpture.jpg';
import dynamic from 'next/dynamic';
import Button from '../components/Common/Button';
import AboutMeSection from '../components/Common/AboutMeSection';
import Divider from '../components/Common/Divider';
import HeroSection from '../components/Common/HeroSection';

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

const HomePage: NextPage = () => {
  const SpecsLazy = dynamic(() => import('../components/Spec/Specs'));
  const BlogSectionLazy = dynamic(() => import('../components/Blog/BlogSection'));

  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <Link href="/pomoc-prawna-online" passHref>
        <Divider image={sculpture.src} title="Potrzebujesz pomocy prawnej online? Skontaktuj się ze mną." />
      </Link>
      <Title>Specjalizacje</Title>
      <SpecsLazy />
      <Title>Blog prawny</Title>
      <BlogSectionLazy />
      <ButtonContainer>
        <Link href="/blog-prawny" passHref>
          <Button text="Więcej" />
        </Link>
      </ButtonContainer>
    </>
  );
};

export default HomePage;
