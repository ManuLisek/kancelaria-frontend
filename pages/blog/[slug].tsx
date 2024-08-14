import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import BlogSection from '../../components/Blog/BlogSection';
import { formatDate } from '../../helpers/formatDate';
import Article from '../../components/Blog/Article/Article';
import ArticleTitle from '../../components/Blog/Article/ArticleTitle';
import ArticleSeeAlso from '../../components/Blog/Article/ArticleSeeAlso';
import axiosConfig from '../../api/axiosConfig';

const StyledDate = styled.p`
  margin-bottom: 40px;
`;

const StyledImgWrapper = styled.div`
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

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const ArticlePage: NextPage<Props> = ({ article }: Props) => (
  <>
    <Container maxWidth="md">
      {article
        ? (
          <Article>
            <ArticleTitle>{article.title}</ArticleTitle>
            <StyledDate>{formatDate(article.publishedAt)}</StyledDate>
            <StyledImgWrapper>
              <StyledImg src={article.image.src} alt={article.image.alt} />
            </StyledImgWrapper>
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </Article>

        )
        : (
          <div>Artykuł nie został znaleziony.</div>
        )}
    </Container>
    <ArticleSeeAlso />
    <BlogSection excludeId={Number(article.id)} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axiosConfig.getArticlesData();
  const paths = data.articles.map((article: BlogArticle) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const { data: articlesData } = await axiosConfig.getArticlesData();
  const currentArticle = articlesData.articles.find((article: BlogArticle) => article.slug === slug);
  const { data } = await axiosConfig.getArticleData(currentArticle.id);
  const { article } = data;

  return {
    props: {
      article,
    },
  };
};

export default ArticlePage;
