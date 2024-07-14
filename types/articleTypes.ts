export interface Image {
  src: string;
  alt: string;
}

export interface ImageData {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
    }
  }
}

export interface ArticleAttributes {
  content: string;
  description: string;
  title: string;
  image: ImageData;
}

export interface Article {
  id: number;
  attributes: ArticleAttributes;
}

export interface GetArticlesResponse {
  data: Article[];
}

export interface GetArticleResponse {
  data: Article;
}

export interface TransformedArticle {
  key: number;
  title: string;
  id: number;
  content: string;
  description: string;
  image: Image;
}

export interface TransformedResponse {
  articles: TransformedArticle[];
}
