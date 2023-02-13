import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import Footer from '../components/Footer';
import Navbar from '../components/Nav';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>

);

export default MyApp;
