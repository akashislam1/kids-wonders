import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../HeroSection/HeroSection";
import DealSection from "../OurDealSection/DealSection";
import Services from "../ServicesSection/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");
  return (
    <div className="p-3">
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Services></Services>
      <HeroSection></HeroSection>
      <DealSection></DealSection>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
