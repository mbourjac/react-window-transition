import { Outlet, ScrollRestoration } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};
