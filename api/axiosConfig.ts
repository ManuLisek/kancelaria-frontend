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
            publishedAt: article.attributes.publishedAt.slice(0, 10),
            slug: article.attributes.slug,
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
          publishedAt: parsedResponse.data.attributes.publishedAt.slice(0, 10),
          slug: parsedResponse.data.attributes.slug,
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
      (response): { specs: TransformedSpec[] } => {
        const parsedResponse: GetSpecsResponse = JSON.parse(response);
        const transformedSpecs: TransformedSpec[] = parsedResponse.data.map(
          (spec) => ({
            key: spec.id,
            id: spec.id,
            content: spec.attributes.content,
            name: spec.attributes.name,
            slug: spec.attributes.slug,
          }),
        );
        return {
          specs: transformedSpecs,
        };
      },
    ],
  }),

  getSpecData: (id: string) => instance({
    method: 'GET',
    url: `/api/specs/${id}`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    transformResponse: [
      (response): { spec: TransformedSpec } => {
        const parsedResponse: TransformedSpec = JSON.parse(response);
        const transformedSpec: TransformedSpec = {
          key: parsedResponse.id,
          id: parsedResponse.id,
          content: parsedResponse.content,
          name: parsedResponse.name,
          slug: parsedResponse.slug,
        };
        return {
          spec: transformedSpec,
        };
      },
    ],
  }),
};
