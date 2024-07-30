import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useData } from '../../context/DataContext';

const SpecPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { specs } = useData();
  const currentSpec = specs.find((spec) => spec.id.toString() === id);

  return (

    currentSpec
      ? (
        <>
          <h1>{currentSpec.name}</h1>
          <div>{currentSpec.content}</div>
        </>
      )
      : <div>Specjalizacja nie została znaleziona.</div>

  );
};

export default SpecPage;
