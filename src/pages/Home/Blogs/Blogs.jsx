import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="min-h-screen my-10">
      <div className="text-center font-bold text-4xl  my-8">
        <span className="text-[#4acdd5] ">Latest</span> Blog
        <span className="text-pink-500">.</span>
      </div>
      <div className="overflow-x-hidden overflow-y-hidden grid grid-cols-1 md:grid-cols-2 gap-5 md:p-10">
        {/* Card 1 */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-slate-100 p-3 flex flex-col md:flex-row gap-5 rounded-2xl"
        >
          <img
            className="w-full md:w-72 rounded-xl mx-auto "
            src="https://i.ibb.co/vQXgfPm/MKSX2028-YELLOW-600x.webp"
            alt=""
          />
          <div className="space-y-4 py-5">
            <h4 className="font-bold text-xl text-[#4acdd5]">February 23</h4>
            <div className="space-y-4">
              <p className="flex items-center font-semibold text-pink-500 gap-2">
                <FaUserAlt></FaUserAlt>
                By John Doe
              </p>
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
          className="bg-slate-100 p-3 flex flex-col md:flex-row-reverse gap-5 rounded-2xl"
        >
          <img
            className="w-full md:w-72 rounded-xl mx-auto "
            src="https://i.ibb.co/c3CGXBY/New-Design-12-V-4-WD-Rechargeable-Kids-Electric-Toy-Vehicle-Children-Powerful-Car-with-Drift-Functio.webp"
            alt=""
          />
          <div className="space-y-4 py-5">
            <h4 className="font-bold text-xl text-[#4acdd5]">March 23</h4>
            <div className="space-y-4">
              <p className="flex items-center font-semibold text-pink-500 gap-2">
                <FaUserAlt></FaUserAlt>
                By William Kerry
              </p>
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
      </div>
      <div className="text-center my-4">
        <Link to="/blogs">
          <button className=" text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border  duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
            SEE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
