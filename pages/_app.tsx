import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { DataProvider } from '../context/DataContext';
import theme from '../theme/theme';
import Footer from '../components/Layout/Footer';
import Main from '../components/Layout/Main';
import Header from '../components/Layout/Header';
import axiosConfig from '../api/axiosConfig';
import { TransformedArticle } from '../types/articleTypes';
import { TransformedSpec } from '../types/specTypes';

interface InitialData {
  articles: TransformedArticle[];
  specs: TransformedSpec[];
}

export interface MyAppProps extends AppProps {
  pageProps: {
    initialData: InitialData;
  };
}

const MyApp = ({ Component, pageProps }: MyAppProps) => (
  <DataProvider initialData={pageProps.initialData}>
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </ThemeProvider>
  </DataProvider>
);

MyApp.getInitialProps = async () => {
  const articlesData = await axiosConfig.getArticlesData();
  const specsData = await axiosConfig.getSpecsData();

  return {
    pageProps: {
      initialData: {
        articles: articlesData.data.articles,
        specs: specsData.data.specs,
      },
    },
  };
};

export default MyApp;
