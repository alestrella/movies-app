import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import Box from 'components/Box';

export const Layout = () => {
  return (
    <Box maxWidth="1200px" px={4} mx="auto">
      <AppBar />
      <Outlet />
    </Box>
  );
};
