import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import styled from 'styled-components';
import navItems from '../data/navItems';
import logo from '../assets/images/logo.png';

const DrawerContent = styled.div`
  width: 240px;
  height: 100%;
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

const FlexBox = styled(Box)`
  display: flex;
`;

const Logo = styled.div`
  margin: 10px 0;
  cursor: pointer;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.secondary.dark};
` as typeof AppBar;

const StyledBox = styled(Box)`
  text-align: center;
`;

const StyledButton = styled(Button)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const StyledIconButton = styled(IconButton)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const StyledListItemText = styled(ListItemText)`
  text-align: center;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <StyledBox onClick={handleDrawerToggle}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.pageName} disablePadding>
            <Link href={`/${item.fileName}`} as={`/${item.routeName}`}>
              <ListItemButton>
                <StyledListItemText primary={item.pageName} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </StyledBox>
  );

  return (
    <FlexBox>
      <StyledAppBar component="nav">
        <StyledToolbar>
          <Logo>
            <Link href="/">
              <img src={logo.src} alt="logo" />
            </Link>
          </Logo>
          <Hidden smUp>
            <StyledIconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </StyledIconButton>
          </Hidden>
          <Hidden smDown>
            <Box>
              {navItems.map((item) => (
                <Link href={`/${item.fileName}`} as={`/${item.routeName}`} key={item.pageName}>
                  <StyledButton>
                    {item.pageName}
                  </StyledButton>
                </Link>
              ))}
            </Box>
          </Hidden>
        </StyledToolbar>
      </StyledAppBar>
      <Box>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerContent>
              {drawer}
            </DrawerContent>
          </Drawer>
        </Hidden>
      </Box>
    </FlexBox>
  );
};

export default NavBar;
