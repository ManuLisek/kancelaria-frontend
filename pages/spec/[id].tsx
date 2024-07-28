import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useData } from '../../context/DataContext';

const SpecPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { specs } = useData();
  const currentSpec = specs.find((spec) => spec.id.toString() === id);

  return (
    <main>
      {currentSpec
        && (
          <>
            <h1>{currentSpec.name}</h1>
            <div>{currentSpec.content}</div>
          </>
        )}
    </main>
  );
};

export default SpecPage;
