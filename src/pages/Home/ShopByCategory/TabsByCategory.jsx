import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TabsByCategory = ({ toy }) => {
  console.log(toy);
  const { _id, toy_name, picture, price, rating } = toy;

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      className="my-4 rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3 p-5 hover:shadow-xl"
    >
      <img className="w-64 h-64" src={picture} alt="" />
      <div className="text-center border-t-2">
        <h2 className="font-bold text-xl my-4">Name : {toy_name}</h2>
        <p>Price : ${price}</p>
        <p className="mt-2 mb-5">
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
        </p>
        <Link to={`/toy-details/${_id}`}>
          <button className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TabsByCategory;
