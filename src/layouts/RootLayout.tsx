import { Outlet, ScrollRestoration } from "react-router-dom";
import GoogleReviewBadge from "../components/UI/GoogleReviewBadge";
import BackToTop from "../components/UI/BackToTop";
import { Suspense } from "react";
import PageLoader from "../components/UI/PageLoader";
import ScrollToHash from "../components/Utils/ScrollToHash";
// import Snowfall from '../components/Effects/Snowfall';

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <ScrollToHash />
      {/* <Snowfall /> */}
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <GoogleReviewBadge />
      <BackToTop />
    </>
  );
};

export default RootLayout;
