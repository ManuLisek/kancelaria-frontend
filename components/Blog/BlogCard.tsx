import Link from 'next/link';
import styled from 'styled-components';
import { formatDate } from '../../helpers/formatDate';

const StyledArticlesTitle = styled.h4`
  margin-bottom: 8px;
  color: black;

  @media (max-width: 599px) {
    font-size: 14px;
  }
`;

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 450px;
  padding: 20px;
  background-color: white;
  opacity: .9;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 899px) {
    width: 100%;
  }

  @media (max-width: 599px) {
    gap: 10px;
    padding: 10px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

const StyledImgWrapper = styled.div`
  width: 130px;
  height: 86px;
  flex-shrink: 0;

  @media (max-width: 599px) {
    width: 100px;
    height: 66px;
  }
`;

const StyledDate = styled.p`
  color: black;
  font-size: 14px;
`;

interface BlogCardProps {
  title: string;
  image: string;
  slug: string;
  publishedAt: string;
}

const BlogCard = ({
  title, image, slug, publishedAt,
}: BlogCardProps): JSX.Element => (
  <Link href={`/blog-prawny/${slug}`}>
    <StyledCard>
      <StyledImgWrapper>
        <StyledImg
          src={image}
          alt={title}
        />
      </StyledImgWrapper>
      <div>
        <StyledArticlesTitle>
          {title}
        </StyledArticlesTitle>
        <StyledDate>{formatDate(publishedAt)}</StyledDate>
      </div>
    </StyledCard>
  </Link>
);

export default BlogCard;
