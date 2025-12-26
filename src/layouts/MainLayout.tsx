import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const MainLayout = () => {
  const { location } = useParams(); // URL params are available in nested layouts
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <Outlet />
      </main>
      <Footer activeLocation={location} />
    </>
  );
};

export default MainLayout;
