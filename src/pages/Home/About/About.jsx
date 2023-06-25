import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className=" md:p-10 min-h-screen">
      <div className="text-center font-bold text-4xl  mb-10">
        <span className="text-[#4acdd5] ">About</span> US
        <span className="text-pink-500">.</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-hidden overflow-y-hidden">
        <div
          className=""
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            className="rounded-md w-full"
            src="https://i.ibb.co/yW7gkj8/car-collection.webp"
            alt=""
          />
        </div>
        <div
          className="space-y-4"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h3 className="text-2xl font-semibold">
            We Have Everything You Need ?
          </h3>
          <p className="mb-5">
            <strong>Kids Wonders</strong> toy car collections are a popular
            hobby and playtime activity for many kids. Collecting toy cars can
            be a fun way for children to explore different types of vehicles,
            develop their imagination, and engage in pretend play. Here are some
            key points about <strong>Kids Wonders</strong> toy car collections:
          </p>
          <div>
            <h5 className="font-bold">Sample List :</h5>
            <div>
              <li>Types of Toy Cars</li>
              <li>Scale Models</li>
              <li>Collectible Series</li>
              <li>Display and Storage</li>
              <li>Trading and Swapping</li>
              <li>Accessories and Playsets</li>
            </div>
          </div>
          <button className=" text-white bg-[#4acdd5] text-center  rounded-full  hover:bg-pink-500 hover:text-white border  duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
            CONTACT US{" "}
            <FaArrowRight className="inline-block ml-3"></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

// https://i.ibb.co/yW7gkj8/car-collection.webp
