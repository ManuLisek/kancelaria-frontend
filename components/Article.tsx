import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledArticle = styled.article`
  margin-bottom: 100px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.palette.primary.main};

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    margin-bottom: 40px;

    & + ul {
      margin-top: -30px;
    }
  }

  ul {
    margin-bottom: 30px;
    padding-left: 10px;
    list-style-position: inside;

    li {
      padding-left: 15px;
      text-indent: -23px;

      &::marker {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }

  blockquote {
    border-left: 3px solid ${(props) => props.theme.palette.primary.main};
    font-style: italic;

    p {
      padding-left: 10px;
    }
  }
`;

interface ArticleProps {
  children: ReactNode;
}

const Article = ({ children }:ArticleProps) => (
  <StyledArticle>
    {children}
  </StyledArticle>
);

export default Article;
