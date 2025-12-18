import { createBrowserRouter, RouterProvider, Navigate, redirect } from 'react-router-dom';
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
const About = lazy(() => import('./pages/About'));

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
          { path: "reserve", element: <Navigate to="/" replace /> },
          { path: "reserve", element: <Reserve /> },
          { path: "vouchers", element: <Vouchers /> },
          { path: "click-and-collect", element: <ClickCollect /> },
          { path: "about", element: <About /> },

          // Location Routes with Strict Validation & Canonicalization
          {
            path: ":location",
            loader: async ({ params }) => {
              const locationParam = params.location;
              if (!locationParam) {
                throw new Response("Location Not Found", { status: 404 });
              }

              const normalized = locationParam.toLowerCase();
              if (!isValidLocation(normalized)) {
                throw new Response("Location Not Found", { status: 404 });
              }

              // Enforce lowercase URLs for consistency
              if (locationParam !== normalized) {
                return redirect('/' + normalized);
              }

              return null;
            },
            children: [
              { index: true, element: <Location /> },
              { path: "reserve", element: <Reserve /> },
              { path: "vouchers", element: <Vouchers /> },
              { path: "click-and-collect", element: <ClickCollect /> },
              { path: "about", element: <About /> }
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
