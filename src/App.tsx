import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from './layouts/RootLayout';
import MainLayout from './layouts/MainLayout';
import ErrorPage from './pages/ErrorPage';
import { CartProvider } from './context/CartContext';
import { isValidLocation } from './constants/locations';
import PageLoader from './components/UI/PageLoader';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Location = lazy(() => import('./pages/Location'));
const Reserve = lazy(() => import('./pages/Reserve'));
const Vouchers = lazy(() => import('./pages/Voucher'));
const ClickCollect = lazy(() => import('./pages/ClickCollect'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        element: <MainLayout />,
        children: [
          { path: "reserve", element: <Navigate to="/" replace /> }, // Force location selection or default? Let's redirect to Home to choose location for now as strict mode. OR allow global reserve if it handles it. 
          // User asked for "Modern URL System". 
          // Let's keep global routes but maybe they should be specific?
          // Actually, keeping them is safer for existing links, but let's be strict about Location specific ones.
          // I'll keep the direct links functioning but wrapped in MainLayout.
          { path: "reserve", element: <Reserve /> },
          { path: "vouchers", element: <Vouchers /> },
          { path: "click-and-collect", element: <ClickCollect /> },

          // Location Routes with Strict Validation
          {
            path: ":location",
            loader: async ({ params }) => {
              if (!params.location || !isValidLocation(params.location)) {
                throw new Response("Location Not Found", { status: 404 });
              }
              return null;
            },
            children: [
              { index: true, element: <Location /> },
              { path: "reserve", element: <Reserve /> },
              { path: "vouchers", element: <Vouchers /> },
              { path: "click-and-collect", element: <ClickCollect /> }
            ]
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} fallbackElement={<PageLoader />} />
    </CartProvider>
  );
}

export default App;
