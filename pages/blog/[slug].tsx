import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { formatDate } from '../../helpers/formatDate';
import Article from '../../components/Blog/Article/Article';
import ArticleTitle from '../../components/Blog/Article/ArticleTitle';
import ArticleSeeAlso from '../../components/Blog/Article/ArticleSeeAlso';
import axiosConfig from '../../api/axiosConfig';

const StyledDate = styled.p`
  margin-bottom: 40px;
`;

const StyledImgWrapper = styled.div`
position: relative;
  width: 100%;
  max-width: 540px;
  height: 400px;
  margin: 0 auto 40px;

  @media (max-width: 599px) {
    width: 100%;
    max-width: 280px;
    height: 200px;
  }
`;

interface BlogArticle {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
  slug: string;
  image: {
    src: string;
    alt: string;
  }
}

interface Props {
  article: BlogArticle;
}

const ArticlePage: NextPage<Props> = ({ article }: Props) => {
  const BlogSectionLazy = dynamic(() => import('../../components/Blog/BlogSection'));
  return (
    <>
      <Container maxWidth="md">
        {article
          ? (
            <Article>
              <ArticleTitle>{article.title}</ArticleTitle>
              <StyledDate>{formatDate(article.publishedAt)}</StyledDate>
              <StyledImgWrapper>
                <Image src={article.image.src} alt={article.title} layout="fill" objectFit="cover" />
              </StyledImgWrapper>
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </Article>

          )
          : (
            <div>Artykuł nie został znaleziony.</div>
          )}
      </Container>
      <ArticleSeeAlso />
      <BlogSectionLazy excludeId={Number(article.id)} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await axiosConfig.getArticlesData();

    if (!data || !data.articles) {
      return { paths: [], fallback: false };
    }

    const paths = data.articles.map((article: BlogArticle) => ({
      params: { slug: article.slug },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }
  const { slug } = params;

  try {
    const { data: articlesData } = await axiosConfig.getArticlesData();
    const currentArticle = articlesData.articles.find((article: BlogArticle) => article.slug === slug);

    if (!currentArticle) {
      return { notFound: true };
    }

    const { data } = await axiosConfig.getArticleData(currentArticle.id);

    if (!data) {
      return { notFound: true };
    }

    return {
      props: {
        article: data.article,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default ArticlePage;
