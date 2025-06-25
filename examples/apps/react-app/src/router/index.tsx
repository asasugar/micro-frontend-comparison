import React from 'react';
import type { RouteObject } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

export const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
