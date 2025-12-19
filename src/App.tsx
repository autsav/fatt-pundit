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
const ClickCollect = lazy(() => import('./pages/ClickCollect'));
const About = lazy(() => import('./pages/About'));
const Vouchers = lazy(() => import('./pages/Voucher'));
const NotFound = lazy(() => import('./pages/NotFound'));


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

          { path: "reserve", element: <Reserve /> },
          { path: "vouchers", element: <Vouchers /> },
          { path: "click-and-collect", element: <ClickCollect /> },
          { path: "about", element: <About /> },

          // Location Routes with Strict Validation & Canonicalization
          {
            path: ":location",
            loader: async ({ request, params }) => {
              const locationParam = params.location;
              if (!locationParam) {
                throw new Response("Location Not Found", { status: 404 });
              }

              const normalized = locationParam.toLowerCase();
              if (!isValidLocation(normalized)) {
                throw new Response("Location Not Found", { status: 404 });
              }

              // Enforce lowercase URLs for consistency, but preserve sub-routes (e.g. /reserve)
              if (locationParam !== normalized) {
                const url = new URL(request.url);
                // Replace the location segment in the path
                // This assumes the location is the second segment (after /) or similar.
                // A safer way is to replace the specific matched segment or rebuild.
                // Since we are in a child route, we know strict structure: /:location...

                // Simple string replacement for the first occurrence might be risky if duplicated, 
                // but location param is unique in context.
                // Better: Reconstruct url.

                // Current path: /Soho/reserve -> /soho/reserve
                // url.pathname has the full path.
                const newPath = url.pathname.replace(locationParam, normalized);
                return redirect(newPath + url.search);
              }

              return null;
            },
            children: [
              { index: true, element: <Location /> },
              { path: "reserve", element: <Reserve /> },
              { path: "vouchers", element: <Vouchers /> },
              { path: "click-and-collect", element: <ClickCollect /> },
              { path: "about", element: <About /> },
              { path: "*", element: <NotFound /> }
            ]
          },
          { path: "*", element: <NotFound /> }
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
