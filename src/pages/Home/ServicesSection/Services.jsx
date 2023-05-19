import { FaAward, FaGift, FaSyncAlt, FaTruckMoving } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl mb-8 md:mb-0 ">
        <span className="text-[#4acdd5] ">Our</span> Services
        <span className="text-pink-500">.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5  md:p-10 ">
        <div className=" hover:shadow-xl p-4 border border-pink-600  rounded-md flex flex-col gap-4 justify-center items-center ">
          <FaTruckMoving className="text-5xl text-pink-500 w-16 h-16 p-3 rounded-full border border-pink-600"></FaTruckMoving>
          <h4 className="font-bold text-xl">Free Shipping</h4>
        </div>
        <div className=" hover:shadow-xl p-4 border border-pink-600 rounded-md flex flex-col gap-4 justify-center items-center">
          <FaSyncAlt className="text-5xl text-pink-500 w-16 h-16 p-3 rounded-full border border-pink-600"></FaSyncAlt>
          <h4 className="font-bold text-xl">Returns Policy</h4>
        </div>
        <div className=" hover:shadow-xl p-4 border border-pink-600 rounded-md flex flex-col gap-4 justify-center items-center">
          <FaGift className="text-5xl text-pink-500 w-16 h-16 p-3 rounded-full border border-pink-600"></FaGift>
          <h4 className="font-bold text-xl">Gift Cards</h4>
        </div>
        <div className=" hover:shadow-xl p-4 border border-pink-600 rounded-md flex flex-col gap-4 justify-center items-center">
          <FaAward className="text-5xl text-pink-500 w-16 h-16 p-3 rounded-full border border-pink-600"></FaAward>
          <h4 className="font-bold text-xl">Best Quality</h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
