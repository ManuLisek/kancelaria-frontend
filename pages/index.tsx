import type { NextPage } from 'next';
import AboutMeSection from '../components/AboutMeSection';
import BlogSection from '../components/BlogSection';
import Divider from '../components/Divider';
import Specs from '../components/Specs';
import books from '../assets/images/books.jpg';
import sculpture from '../assets/images/sculpture.jpg';

const Home: NextPage = () => (
  <>
    <AboutMeSection />
    <Divider image={books.src} title="Specjalizacje" />
    <Specs />
    <Divider image={sculpture.src} title="Potrzebujesz pomocy prawnej online? Skontaktuj się ze mną" />
    <BlogSection />
  </>
);

export default Home;
