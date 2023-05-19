import car1 from "../../../assets/images/Cars/car1.png";
import car2 from "../../../assets/images/Cars/car2.png";
import car5 from "../../../assets/images/Cars/car3.png";
import car4 from "../../../assets/images/Cars/car4.png";
import car3 from "../../../assets/images/Cars/car5.png";
import car6 from "../../../assets/images/Cars/car6.png";
import car7 from "../../../assets/images/Cars/car7.png";
import car8 from "../../../assets/images/Cars/car8.png";

const Gallery = () => {
  return (
    <div className="my-20">
      <div className="text-center font-bold text-4xl  my-8">
        <span className="text-[#4acdd5] ">Our</span> Toy Collection
        <span className="text-pink-500">.</span>
      </div>
      <div className=" bg-[#f6f7f8] grid grid-cols-1 md:grid-cols-4 gap-5  p-4 overflow-x-hidden overflow-y-hidden">
        <div
          className="bg-white hover:shadow-xl rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="">
            <img className="w-96 rounded-t-md" src={car1} alt="" />
          </div>
          <div className="border w-full p-4 hover:bg-[#4acdd5] hover:text-white hover:shadow-lg transition duration-300 rounded-b-md font-semibold ">
            Buy Now
          </div>
        </div>
        <div
          className="bg-white hover:shadow-xl rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="">
            <img className="w-96 rounded-t-md" src={car2} alt="" />
          </div>
          <div className="border w-full p-4 hover:bg-[#4acdd5] hover:text-white hover:shadow-lg transition duration-300 rounded-b-md font-semibold ">
            Buy Now
          </div>
        </div>
        <div
          className="bg-white hover:shadow-xl rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="">
            <img className="w-96 rounded-t-md" src={car3} alt="" />
          </div>
          <div className="border w-full p-4 hover:bg-[#4acdd5] hover:text-white hover:shadow-lg transition duration-300 rounded-b-md font-semibold ">
            Buy Now
          </div>
        </div>
        <div
          className="bg-white hover:shadow-xl rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="">
            <img className="w-96 rounded-t-md" src={car4} alt="" />
          </div>
          <div className="border w-full p-4 hover:bg-[#4acdd5] hover:text-white hover:shadow-lg transition duration-300 rounded-b-md font-semibold ">
            Buy Now
          </div>
        </div>
        <div
          className="bg-white hover:shadow-xl rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="">
            <img className="w-96 rounded-t-md" src={car5} alt="" />
          </div>
          <div className="border w-full p-4 hover:bg-[#4acdd5] hover:text-white hover:shadow-lg transition duration-300 rounded-b-md font-semibold ">
            Buy Now
          </div>
        </div>
        <div
          className="bg-white hover:shadow-xl rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="">
            <img className="w-96 rounded-t-md" src={car6} alt="" />
          </div>
          <div className="border w-full p-4 hover:bg-[#4acdd5] hover:text-white hover:shadow-lg transition duration-300 rounded-b-md font-semibold ">
            Buy Now
          </div>
        </div>
        <div
          className="bg-white hover:shadow-xl rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="">
            <img className="w-96 rounded-t-md" src={car7} alt="" />
          </div>
          <div className="border w-full p-4 hover:bg-[#4acdd5] hover:text-white hover:shadow-lg transition duration-300 rounded-b-md font-semibold ">
            Buy Now
          </div>
        </div>
        <div
          className="bg-white hover:shadow-xl rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="">
            <img className="w-96 rounded-t-md" src={car8} alt="" />
          </div>
          <div className="border w-full p-4 hover:bg-[#4acdd5] hover:text-white hover:shadow-lg transition duration-300 rounded-b-md font-semibold ">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
