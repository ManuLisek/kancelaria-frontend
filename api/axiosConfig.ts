import axios from 'axios';
import {
  TransformedArticle, ApiResponse,
} from '../types/articleTypes';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});

interface TransformedResponse {
  articles: TransformedArticle[];
}

export default {
  getArticlesData: () => instance({
    method: 'GET',
    url: '/api/articles?populate=*',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    transformResponse: [
      (response): TransformedResponse => {
        const parsedResponse: ApiResponse = JSON.parse(response);
        const transformedArticles: TransformedArticle[] = parsedResponse.data.map(
          ({ id, attributes }) => ({
            key: id,
            title: attributes.title,
            id,
            content: attributes.content,
            description: attributes.description,
            image: {
              src: `${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.image.data.attributes.url}`,
              alt: attributes.image.data.attributes.alternativeText,
            },
          }),
        );
        return {
          articles: transformedArticles,
        };
      },
    ],
  }),
};
