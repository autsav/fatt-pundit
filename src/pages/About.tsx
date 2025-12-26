import AboutSection from "../components/Sections/AboutSection";
import Breadcrumb from "../components/UI/Breadcrumb";

const About = () => {
  return (
    <div>
      <Breadcrumb />
      {/* Can add a Hero here if needed, but AboutSection includes the big logo intro */}
      <AboutSection />
    </div>
  );
};

export default About;
