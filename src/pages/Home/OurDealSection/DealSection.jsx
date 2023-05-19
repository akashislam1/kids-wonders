import car1 from "../../../assets/images/deal_section/new.jpg";
import car2 from "../../../assets/images/deal_section/new2.jpg";

const DealSection = () => {
  return (
    <div
      className="overflow-x-hidden my-8"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <h2 className="text-center font-bold text-4xl mb-8 md:mb-0 ">
        <span className="text-[#4acdd5] ">Deal</span> Of The Day
        <span className="text-pink-500">.</span>
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:p-10">
        <div className="bg-slate-100 p-3 flex flex-col md:flex-row gap-5 rounded-2xl">
          <img
            className="w-72 rounded-xl "
            src={car1}
            alt=""
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
          <div
            className="space-y-4 py-5"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h3 className="font-bold text-xl">BlazeForce </h3>
            <p className="font-bold text-pink-500">$120.00</p>
            <p className="text-[#787878]">
              BlazeForce is a thrilling new sports car toy that combines speed,
              style, and excitement. Designed with...
            </p>
            <div className="flex justify-between text-center">
              <p className="bg-white w-14 p-4  rounded-full font-bold shadow-md">
                350
              </p>
              <p className="bg-white w-14 p-4  rounded-full font-bold shadow-md">
                21
              </p>
              <p className="bg-white w-14 p-4  rounded-full font-bold shadow-md">
                11
              </p>
              <p className="bg-white text-pink-500 w-14 p-4  rounded-full font-bold shadow-md">
                30
              </p>
            </div>
            <div className="flex justify-between px-3 text-[#787878]">
              <p className=" ">Days</p>
              <p className=" ">Hours</p>
              <p className=" ">Mins</p>
              <p className=" ">Secs</p>
            </div>
            <button className="font-bold text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="bg-slate-100 p-3 flex flex-col md:flex-row gap-5 rounded-2xl">
          <img
            className="w-72 rounded-xl "
            src={car2}
            alt=""
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
          <div
            className="space-y-4 py-5"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h3 className="font-bold text-xl">VelocityX </h3>
            <p className="font-bold text-pink-500">$160.00</p>
            <p className="text-[#787878]">
              VelocityX is the ultimate sports car toy that brings the thrill of
              speed and performance to young racing...
            </p>
            <div className="flex justify-between text-center">
              <p className="bg-white w-14 p-4  rounded-full font-bold shadow-md">
                350
              </p>
              <p className="bg-white w-14 p-4  rounded-full font-bold shadow-md">
                21
              </p>
              <p className="bg-white w-14 p-4  rounded-full font-bold shadow-md">
                11
              </p>
              <p className="bg-white text-pink-500 w-14 p-4  rounded-full font-bold shadow-md">
                30
              </p>
            </div>
            <div className="flex justify-between px-3 text-[#787878]">
              <p className=" ">Days</p>
              <p className=" ">Hours</p>
              <p className=" ">Mins</p>
              <p className=" ">Secs</p>
            </div>
            <button className="font-bold text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
