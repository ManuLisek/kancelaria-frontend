export interface Image {
  src: string;
  alt: string;
}

export interface TransformedArticle {
  key: number;
  title: string;
  id: number;
  content: string;
  description: string;
  image: Image;
}
