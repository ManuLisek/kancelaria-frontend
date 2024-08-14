import styled from 'styled-components';
import logo from 'public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const ImageWrapper = styled.div`
  margin-bottom: 10px;
  width: 46px;
  min-width: 46px;
  height: 46px;
  cursor: pointer;
`;

const Logo = () => (
  <Link href="/">
    <ImageWrapper>
      <Image src={logo.src} alt="logo" width="100%" height="100%" />
    </ImageWrapper>
  </Link>
);

export default Logo;
