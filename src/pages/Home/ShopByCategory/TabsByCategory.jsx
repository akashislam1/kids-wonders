import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const TabsByCategory = ({ toy }) => {
  const { _id, toy_name, picture, price, rating } = toy;

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      className="my-4 rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3 p-5 hover:shadow-xl"
    >
      <img className="w-64 h-64" src={picture} alt="" />
      <div className="text-center border-t-2">
        <h2 className="font-bold  my-4">Name : {toy_name}</h2>
        <p>Price : ${price}</p>
        <div className="mt-2 mb-5 flex justify-center">
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(rating || 0)}
            readOnly
          />
        </div>

        <button className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline ">
          <Link to={`/toy-details/${_id}`}> View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default TabsByCategory;
