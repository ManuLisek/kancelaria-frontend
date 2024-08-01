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

interface TextNode {
  type: 'text';
  text: string;
}

type ChildNode = TextNode;

interface ParagraphNode {
  type: 'paragraph';
  children: ChildNode[];
}

type ContentNode = ParagraphNode;

export interface ArticleAttributes {
  content: ContentNode[];
  description: string;
  title: string;
  publishedAt: string;
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
  content: ParagraphNode[];
  description: string;
  publishedAt: string;
  image: Image;
}
