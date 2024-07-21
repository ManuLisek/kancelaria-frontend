import axios from 'axios';
import { TransformedArticle, GetArticlesResponse, GetArticleResponse } from '../types/articleTypes';
import { TransformedSpec, GetSpecsResponse } from '../types/specTypes';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});

export default {
  getArticlesData: () => instance({
    method: 'GET',
    url: '/api/articles?populate=*',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    transformResponse: [
      (response): { articles: TransformedArticle[] } => {
        const parsedResponse: GetArticlesResponse = JSON.parse(response);
        const transformedArticles: TransformedArticle[] = parsedResponse.data.map(
          (article) => ({
            key: article.id,
            title: article.attributes.title,
            id: article.id,
            content: article.attributes.content,
            description: article.attributes.description,
            image: {
              src: `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.image.data.attributes.url}`,
              alt: article.attributes.image.data.attributes.alternativeText,
            },
          }),
        );
        return {
          articles: transformedArticles,
        };
      },
    ],
  }),

  getArticleData: (id: string) => instance({
    method: 'GET',
    url: `/api/articles/${id}?populate=*`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    transformResponse: [
      (response): { article: TransformedArticle } => {
        const parsedResponse: GetArticleResponse = JSON.parse(response);
        const transformedArticle: TransformedArticle = {
          key: parsedResponse.data.id,
          title: parsedResponse.data.attributes.title,
          id: parsedResponse.data.id,
          content: parsedResponse.data.attributes.content,
          description: parsedResponse.data.attributes.description,
          image: {
            src: `${process.env.NEXT_PUBLIC_STRAPI_URL}${parsedResponse.data.attributes.image.data.attributes.url}`,
            alt: parsedResponse.data.attributes.image.data.attributes.alternativeText,
          },
        };
        return {
          article: transformedArticle,
        };
      },
    ],
  }),

  getSpecsData: () => instance({
    method: 'GET',
    url: '/api/specs',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    transformResponse: [
      (response): { results: TransformedSpec[] } => {
        const parsedResponse: GetSpecsResponse = JSON.parse(response);
        const transformedSpecs: TransformedSpec[] = parsedResponse.results.map(
          ({ id, name, content }) => ({
            key: id,
            name,
            id,
            content,
          }),
        );
        return {
          results: transformedSpecs,
        };
      },
    ],
  }),
};
