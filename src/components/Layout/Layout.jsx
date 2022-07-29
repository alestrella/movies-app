import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import Box from 'components/Box';
import { Suspense } from 'react';
import { SubHeading } from 'components/Text/Text.styled';

export const Layout = () => {
  return (
    <Box maxWidth="1200px" px={4} mx="auto">
      <AppBar />
      <Suspense fallback={<SubHeading>Loading...</SubHeading>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
