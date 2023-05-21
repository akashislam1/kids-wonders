import car1 from "../../../assets/images/hero_sec/green.png";
import car2 from "../../../assets/images/hero_sec/sp8.png";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:p-8 my-24 md:my-8 overflow-x-hidden overflow-y-hidden">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="bg-[#83e3e2] p-4 flex flex-col-reverse md:flex-row items-center justify-around gap-4 rounded-xl"
      >
        <div className="space-y-5">
          <h3 className="font-bold text-white text-5xl">ON SALE</h3>
          <p className="bg-[#646d6d] text-white p-1 text-center rounded-md">
            LATEST COLLECTION
          </p>
          <button className="bg-[#ff5146] px-3 py-2 rounded-2xl  text-white">
            SHOP NOW
          </button>
        </div>
        <img className="w-60 h-60" src={car1} alt="" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="bg-[#ffe368] p-4 flex flex-col md:flex-row-reverse items-center justify-around gap-4 rounded-xl"
      >
        <div className="space-y-5">
          <h3 className="font-bold text-white text-5xl">New Arrival</h3>
          <p className="bg-[#646d6d] text-white p-1 text-center rounded-md">
            SAVE UPTO 30% OFF
          </p>
          <button className="bg-[#ff5146] px-3 py-2 rounded-2xl  text-white">
            SHOP NOW
          </button>
        </div>
        <img className="w-60 h-60" src={car2} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
