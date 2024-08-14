import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Logo from '../Common/Logo';
import navItems from '../../data/navItems';

const AppBarSpacer = styled.div`
  height: 70px;
`;

const DrawerContent = styled.div`
  width: 240px;
  height: 100%;
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

const StyledListItemButton = styled(ListItemButton)`
  color: white;

  &.active {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const StyledAppBar = styled(AppBar)`
  position: fixed;
  top: -70px;
  background-color: transparent;
  transition: 0.3s;
  border-bottom: 1px solid ${(props) => props.theme.palette.primary.main};

  &.active {
    position: fixed;
    top: 0;
    background-color: ${(props) => props.theme.palette.secondary.dark};
  }

  &.top {
    top: 0;
    background-color: transparent;
    box-shadow: none;
  }
` as typeof AppBar;

const StyledBox = styled(Box)`
  text-align: center;
`;

const StyledButton = styled(Button)`
  color: white;

  &.active {
    color: ${(props) => props.theme.palette.primary.main};
  }
  
  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
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

const StyledDrawerContent = styled(DrawerContent)`
  background-color: black;
  border-right: 1px solid ${(props) => props.theme.palette.primary.main};
`;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 960px)');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isHeaderTop, setIsHeaderTop] = useState(true);
  const router = useRouter();
  const isActive = (href: string) => router.pathname.includes(href);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }

    if (window.scrollY > 70) {
      setIsHeaderTop(false);
    } else {
      setIsHeaderTop(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const drawer = (
    <nav>
      <StyledBox onClick={handleDrawerToggle}>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.pageName} disablePadding>
              <Link href={`/${item.routeName}`}>
                <StyledListItemButton className={isActive(`/${item.fileName}`) ? 'active' : ''}>
                  <StyledListItemText primary={item.pageName} />
                </StyledListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </StyledBox>
    </nav>
  );

  return (
    <>
      <StyledAppBar className={`${isHeaderVisible ? 'active' : ''} ${isHeaderTop ? 'top' : ''}`} component="header">
        <Container>
          <StyledToolbar>
            <Logo />
            {isMobile
              ? (
                <StyledIconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </StyledIconButton>
              ) : (
                <nav>
                  <Box>
                    {navItems.map((item) => (
                      <Link
                        href={`/${item.routeName}`}
                        key={item.pageName}
                        className={isActive(`/${item.fileName}`) ? 'active' : ''}
                      >
                        <StyledButton className={isActive(`/${item.fileName}`) ? 'active' : ''}>
                          {item.pageName}
                        </StyledButton>
                      </Link>
                    ))}
                  </Box>
                </nav>
              )}
          </StyledToolbar>
          {isMobile
        && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
          >
            <StyledDrawerContent>
              {drawer}
            </StyledDrawerContent>
          </Drawer>
        )}
        </Container>
      </StyledAppBar>
      <AppBarSpacer />
    </>
  );
};

export default Header;
