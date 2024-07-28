import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useData } from '../context/DataContext';
import Spec from './Spec';
import { TransformedSpec } from '../types/specTypes';

const Specs = () => {
  const { specs } = useData();
  const specsList = specs.map((spec: TransformedSpec) => (
    <Grid key={spec.id} item xs={6} sm={4}>
      <Spec id={spec.id} name={spec.name} />
    </Grid>
  ));

  return (
    <Container>
      <Grid container spacing={2}>
        {specsList}
      </Grid>
    </Container>
  );
};

export default Specs;
