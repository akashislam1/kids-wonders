import car1 from "../../../assets/images/Cars/car1.jpg";
import car2 from "../../../assets/images/Cars/car2.jpg";
import car3 from "../../../assets/images/Cars/car3.jpg";
import car4 from "../../../assets/images/Cars/car4.jpg";
import car5 from "../../../assets/images/Cars/car5.jpg";
import car6 from "../../../assets/images/Cars/car6.jpg";
import car7 from "../../../assets/images/Cars/car7.jpg";
import car8 from "../../../assets/images/Cars/car8.jpg";

const Gallery = () => {
  return (
    <div className="my-20">
      <div className="text-center font-bold text-4xl underline my-8">
        Our Toy Collection
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-5  p-4 overflow-x-hidden overflow-y-hidden">
        <div
          className=" rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
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
          className=" rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
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
          className=" rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
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
          className=" rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
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
          className=" rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
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
          className=" rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
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
          className=" rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
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
          className=" rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3"
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
