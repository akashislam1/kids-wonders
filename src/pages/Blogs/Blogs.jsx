import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="w-full p-2 md:p-10 mx-auto my-10 space-y-5">
      <div className="overflow-x-hidden overflow-y-hidden grid md:grid-cols-3 gap-5 ">
        {/* Card 1 */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-slate-100 p-2 flex flex-col gap-5 rounded-2xl"
        >
          <img
            className="w-full h-72 rounded-xl mx-auto "
            src="https://i.ibb.co/vQXgfPm/MKSX2028-YELLOW-600x.webp"
            alt=""
          />
          <div>
            <h4 className="font-bold text-xl text-[#4acdd5]">February 23</h4>
            <div className="space-y-3 mb-2">
              <div className="flex gap-3 mt-2">
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaRegCalendarAlt></FaRegCalendarAlt>
                  17 February 2023
                </p>
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaUserAlt></FaUserAlt>
                  By John Doe
                </p>
              </div>
              <h2 className="font-bold text-xl">Christmas Sale Is Hear</h2>
              <p className="text-[#787878]">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit....
              </p>
              <button className=" text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border  duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-slate-100 p-2 flex flex-col gap-5 rounded-2xl"
        >
          <img
            className="w-full h-72 rounded-xl mx-auto "
            src="https://i.ibb.co/c3CGXBY/New-Design-12-V-4-WD-Rechargeable-Kids-Electric-Toy-Vehicle-Children-Powerful-Car-with-Drift-Functio.webp"
            alt=""
          />
          <div>
            <h4 className="font-bold text-xl text-[#4acdd5]">March 23</h4>
            <div className="space-y-3 mb-2">
              <div className="flex gap-3 mt-2">
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaRegCalendarAlt></FaRegCalendarAlt>
                  23 March 2023
                </p>
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaUserAlt></FaUserAlt>
                  By William Kerry
                </p>
              </div>
              <h2 className="font-bold text-xl">Viderer Voluptatum Eum</h2>
              <p className="text-[#787878]">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit....
              </p>
              <button className=" text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border  duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-slate-100 p-2 flex flex-col gap-5 rounded-2xl"
        >
          <img
            className="w-full h-72 rounded-xl mx-auto "
            src="https://i.ibb.co/rvfFVRM/blog2.jpg"
            alt=""
          />
          <div>
            <h4 className="font-bold text-xl text-[#4acdd5]">March 23</h4>
            <div className="space-y-3 mb-2">
              <div className="flex gap-3 mt-2">
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaRegCalendarAlt></FaRegCalendarAlt>
                  28 March 2023
                </p>
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaUserAlt></FaUserAlt>
                  By Thomas Alva
                </p>
              </div>
              <h2 className="font-bold text-xl">Scelerisque Vestibulum Urna</h2>
              <p className="text-[#787878]">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit....
              </p>
              <button className=" text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border  duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-slate-100 p-2 flex flex-col gap-5 rounded-2xl"
        >
          <img
            className="w-full h-72 rounded-xl mx-auto "
            src="https://i.ibb.co/4Sh1thJ/blog3.jpg"
            alt=""
          />
          <div>
            <h4 className="font-bold text-xl text-[#4acdd5]">April 23</h4>
            <div className="space-y-3 mb-2">
              <div className="flex gap-3 mt-2">
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaRegCalendarAlt></FaRegCalendarAlt>
                  10 April 2023
                </p>
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaUserAlt></FaUserAlt>
                  By John Mack
                </p>
              </div>
              <h2 className="font-bold text-xl">
                Nec Intellegat Deseruisse Te
              </h2>
              <p className="text-[#787878]">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit....
              </p>
              <button className=" text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border  duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-slate-100 p-2 flex flex-col gap-5 rounded-2xl"
        >
          <img
            className="w-full h-72 rounded-xl mx-auto "
            src="https://i.ibb.co/yQmxC01/blog1.jpg"
            alt=""
          />
          <div>
            <h4 className="font-bold text-xl text-[#4acdd5]">May 23</h4>
            <div className="space-y-3 mb-2">
              <div className="flex gap-3 mt-2">
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaRegCalendarAlt></FaRegCalendarAlt>
                  05 May 2023
                </p>
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaUserAlt></FaUserAlt>
                  By Jenifer Gomes
                </p>
              </div>
              <h2 className="font-bold text-xl">
                Nostro Expetenda Voluptatum Sit Ex
              </h2>
              <p className="text-[#787878]">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit....
              </p>
              <button className=" text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border  duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        {/* card 6 */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-slate-100 p-2 flex flex-col gap-5 rounded-2xl"
        >
          <img
            className="w-full h-72 rounded-xl mx-auto "
            src="https://i.ibb.co/cK9zwMb/blog4.jpg"
            alt=""
          />
          <div>
            <h4 className="font-bold text-xl text-[#4acdd5]">May 23</h4>
            <div className="space-y-3 mb-2">
              <div className="flex gap-3 mt-2">
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaRegCalendarAlt></FaRegCalendarAlt>
                  17 May 2023
                </p>
                <p className="flex items-center font-semibold text-pink-500 gap-2">
                  <FaUserAlt></FaUserAlt>
                  By Oliver Dyna
                </p>
              </div>
              <h2 className="font-bold text-xl">
                Upon Of Seasons Earth Dominion2
              </h2>
              <p className="text-[#787878]">
                Faded short sleeves t-shirt with high neckline. Soft and
                stretchy material for a comfortable fit....
              </p>
              <button className=" text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border  duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
