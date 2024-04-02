import { createBrowserRouter } from 'react-router-dom';

import NotFound from './pages/NotFound';

import SharedLayout from './SharedLayout/SharedLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,

        async lazy() {
          let Index = await import('./pages/HomePage/HomePage');
          return { Component: Index.default };
        },
      },
      {
        path: '/admin',

        async lazy() {
          let Index = await import('./pages/AdminPage/AdminPage');
          return {
            Component: Index.default,
          };
        },
      },

      {
        path: '/payment',

        async lazy() {
          let Index = await import('./pages/PaymentPage/PaymentPage');
          return { Component: Index.default };
        },
      },

      {
        path: '/rules',

        async lazy() {
          let Index = await import(
            './pages/DiscountRulesPage/DiscountRulesPage'
          );
          return { Component: Index.default };
        },
      },

      {
        path: '/delivery',

        async lazy() {
          let Index = await import('./pages/DeliveryPage/DeliveryPage');
          return { Component: Index.default };
        },
      },

      {
        path: '/goods',

        async lazy() {
          let Index = await import(
            './SharedLayout/SharedLayoutForGoods/SharedLayoutForGoods'
          );
          return { Component: Index.default };
        },
      },

      {
        path: '/goods/:goodsName',

        async lazy() {
          let Index = await import(
            './SharedLayout/SharedLayoutForGoods/SharedLayoutForGoods'
          );
          return { Component: Index.default };
        },
      },

      {
        path: '/goods/:goodsName/:id',

        async lazy() {
          let Index = await import(
            './SharedLayout/SharedLayoutForGoods/SharedLayoutForGoods'
          );
          return { Component: Index.default };
        },
      },

      {
        path: '/goods/:goodsName/:id/:nestedId',

        async lazy() {
          let Index = await import(
            './SharedLayout/SharedLayoutForGoods/SharedLayoutForGoods'
          );
          return { Component: Index.default };
        },
      },

      {
        path: '/goods/:goodsName/details/:goodsId',

        async lazy() {
          let Index = await import('./pages/DetailsPage/DetailsPage');
          return { Component: Index.default };
        },
      },
      {
        path: '/order',

        async lazy() {
          let Index = await import('./pages/OrderPage/OrderPage');
          return { Component: Index.default };
        },
      },

      {
        path: '/user',

        async lazy() {
          let Index = await import('./pages/UserPage/UserPage');
          return { Component: Index.default };
        },
      },
    ],
  },
]);

export default router;
