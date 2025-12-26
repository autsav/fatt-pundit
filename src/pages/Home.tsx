import SEO from "../components/SEO";
import LocationSplit from "../components/Sections/LocationSplit";



const Home = () => {
  return (
    <main>
      <SEO
        title="Fatt Pundit | Indo Chinese in Soho & Covent Garden"
        description="Experience the unique flavours of Indo-Chinese cuisine in London. Visit us at Soho or Covent Garden for Momos, Spicy Lollypop Chicken, and more."
      />
      <LocationSplit />

    </main>
  );
};

export default Home;
