import Spec from '../components/Spec'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GavelIcon from '@mui/icons-material/Gavel';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import WorkIcon from '@mui/icons-material/Work';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BusinessIcon from '@mui/icons-material/Business';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const specsData = [
  {
    title: "Prawo karne",
    icon: GavelIcon
  },
  {
    title: "Prawo cywilne",
    icon: PersonIcon
  },
  {
    title: "Nieruchomości",
    icon: HomeIcon
  },
  {
    title: "Prawo rodzinne",
    icon: FamilyRestroomIcon
  },
  {
    title: "Prawo spadkowe",
    icon: ImportContactsIcon
  },
  {
    title: "Prawo administracyjne",
    icon: ManageAccountsIcon
  },
  {
    title: "Prawo pracy",
    icon: WorkIcon
  },
  {
    title: "Prawa spółek",
    icon: BusinessIcon
  },
  {
    title: "Ochrona praw zwierząt",
    icon: PetsIcon
  },
  {
    title: "Ubezpieczenia",
    icon: HealthAndSafetyIcon
  },
  {
    title: "Dochodzenie odszkodowań",
    icon: MonetizationOnIcon
  },
]

const Specs = () => {

  const specs = specsData.map((spec, i) => {

    return (
      <Grid key={i} item xs={6} sm={4}>
        <Spec title={spec.title} icon={<spec.icon fontSize="large"/>}/>
      </Grid>
    );
  });

  return (
    <Container>
      <Grid container spacing={2}>
        {specs}
      </Grid>
    </Container>
  )
};

export default Specs;
