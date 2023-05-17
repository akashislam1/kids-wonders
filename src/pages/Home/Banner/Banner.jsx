import { useEffect } from "react";
import bannerImg from "../../../assets/images/Banner_img/bannerImage.jpg";
import Aos from "aos";
const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 md:my-10  md:p-10">
      <div
        className=""
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img className="rounded-md" src={bannerImg} alt="" />
      </div>
      <div
        className=""
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <button className="bg-[#ff6799] text-white font-bold py-2 px-4 rounded-md">
          Welcome to Kids Wonders
        </button>
        <h3 className="text-4xl font-extrabold my-4">Special Edition</h3>
        <p className="mb-5">
          Here at <strong>Kids Wonders</strong>, we bring the thrill and
          excitement of high-performance automobiles to your fingertips. Whether
          you are a passionate collector or a young racing enthusiast, our
          extensive collection of sports car toys is sure to ignite your
          imagination and rev up your playtime.
        </p>
      </div>
    </div>
  );
};

export default Banner;
