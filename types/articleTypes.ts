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
  title: string;
  publishedAt: string;
  slug: string;
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
  publishedAt: string;
  slug: string;
  image: Image;
}
