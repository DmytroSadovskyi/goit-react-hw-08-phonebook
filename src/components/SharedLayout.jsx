import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import Loader from './Loader';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
