import { TransformedArticle } from './articleTypes';

export interface BlogSectionProps {
  articles: TransformedArticle[];
}

export interface SpecProps {
  title: string;
  icon: JSX.Element;
}

export interface DividerContainerProps {
  image: string;
}

export interface DividerProps extends DividerContainerProps {
  title: string;
}

export interface ButtonProps {
  href: string;
  text: string;
}
