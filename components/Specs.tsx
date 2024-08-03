import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { useData } from '../context/DataContext';
import Spec from './Spec';
import { TransformedSpec } from '../types/specTypes';

const StyledGrid = styled(Grid)`
  justify-content: center;
  margin-bottom: 50px;
`;

interface SpecsProps {
  excludeId?: number;
}

const Specs = ({ excludeId }: SpecsProps) => {
  const { specs } = useData();
  const filteredSpecs = excludeId ? specs.filter((spec: TransformedSpec) => spec.id !== excludeId) : specs;
  const specsList = filteredSpecs.map((spec: TransformedSpec) => (
    <Grid key={spec.id} item xs={6} sm={4}>
      <Spec id={spec.id} name={spec.name} />
    </Grid>
  ));

  return (
    <Container>
      <StyledGrid container spacing={2}>
        {specsList}
      </StyledGrid>
    </Container>
  );
};

export default Specs;
