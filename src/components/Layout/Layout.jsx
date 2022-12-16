import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import Box from 'components/Box';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Box
      maxWidth="1300px"
      minHeight="100vh"
      px={4}
      mx="auto"
      display="grid"
      gridGap={5}
      gridTemplateColumns="1fr"
      gridTemplateRows="auto 1fr auto"
    >
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Box>
  );
};
