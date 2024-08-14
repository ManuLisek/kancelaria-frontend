import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { formatDate } from '../../helpers/formatDate';

const StyledArticlesTitle = styled.h4`
  margin-bottom: 8px;
  color: black;

  @media (max-width: 599px) {
    font-size: 14px;
  }
`;

const StyledCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 450px;
  padding: 20px;
  background-color: white;
  opacity: .9;
  cursor: pointer;
  z-index: 1;

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

const StyledImgWrapper = styled.div`
  position: relative;
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
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
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
