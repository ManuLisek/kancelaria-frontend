import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Spec from './Spec';
import specsData from '../data/specsData';

const Specs = () => {
  const specs = specsData.map((spec) => (
    <Grid key={spec.id} item xs={6} sm={4}>
      <Spec title={spec.title} icon={<spec.icon fontSize="large" />} />
    </Grid>
  ));

  return (
    <Container>
      <Grid container spacing={2}>
        {specs}
      </Grid>
    </Container>
  );
};

export default Specs;
