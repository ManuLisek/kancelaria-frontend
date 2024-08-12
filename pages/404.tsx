import Link from 'next/link';
import styled from 'styled-components';
import Button from '../components/Common/Button';
import PageTitle from '../components/Common/PageTitle';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px - 80px - 70px - 324px);
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <PageTitle>Nie ma tu strony, której szukasz</PageTitle>
    <p>
      Sprawdź czy adres strony jest prawidłowy lub
      przejdź na stronę główną.
    </p>
    <ButtonContainer>
      <Link href="/" passHref>
        <Button text="Strona główna" />
      </Link>
    </ButtonContainer>
  </NotFoundContainer>
);

export default NotFoundPage;
