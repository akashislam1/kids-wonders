import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import DealSection from "../OurDealSection/DealSection";
import Services from "../ServicesSection/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <ShopByCategory></ShopByCategory>
      <Gallery></Gallery>
      <Services></Services>
      <DealSection></DealSection>
    </div>
  );
};

export default Home;
