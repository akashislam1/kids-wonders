import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <ShopByCategory></ShopByCategory>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
