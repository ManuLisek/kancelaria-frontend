import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';
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
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>Kancelaria Adwokacka - Adwokat Wiktoria Sendzik</title>
      <meta
        name="description"
        content="Kancelaria adwokacka z Olsztyna. Profesjonalne porady prawne.
        Zajmuję się obsługą prawną osób fizycznych jak również przedsiębiorstw.
        Posidam wieloletnie doświadczenie z zakresu wielu dziedzin prawa."
      />
    </Head>
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
  try {
    const articlesData = await axiosConfig.getArticlesData();
    const specsData = await axiosConfig.getSpecsData();

    return {
      pageProps: {
        initialData: {
          articles: articlesData.data.articles,
          specs: specsData.data.specs,
          hasError: false,
        },
      },
    };
  } catch (error) {
    return {
      pageProps: {
        initialData: {
          articles: [],
          specs: [],
          hasError: true,
        },
      },
    };
  }
};

export default MyApp;
