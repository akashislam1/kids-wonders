import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ToyTable = ({ toy, index }) => {
  const { handleAlert } = useContext(AuthContext);

  const { _id, toy_name, price, seller_name, subCategory, available_quantity } =
    toy || {};
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
      <td className="px-6 py-4 whitespace-nowrap">{seller_name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{toy_name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{subCategory}</td>
      <td className="px-6 py-4 whitespace-nowrap"> ${price}</td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        {available_quantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link to={`/toy-details/${_id}`}>
          <button
            onClick={handleAlert}
            className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline"
          >
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyTable;
