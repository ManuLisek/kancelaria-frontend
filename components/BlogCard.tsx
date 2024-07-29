import Link from 'next/link';
import styled from 'styled-components';

const StyledArticlesTitle = styled.h4`
  color: black;
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

interface BlogCardProps {
  title: string;
  image: string;
  id: number;
}

const BlogCard = ({
  title, image, id,
}: BlogCardProps): JSX.Element => (
  <Link href={`/article/${id}`}>
    <StyledCard>
      <StyledImgWrapper>
        <StyledImg
          src={image}
          alt={title}
        />
      </StyledImgWrapper>
      <StyledArticlesTitle>
        {title}
      </StyledArticlesTitle>
    </StyledCard>
  </Link>
);

export default BlogCard;
