import React from "react";
import { Link } from "react-router-dom";

const MyToyTableRow = ({ toy, index, handleDelete }) => {
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
        <Link to={`/updateToyDetails/${_id}`}>
          <button className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline mr-3">
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="font-bold text-white bg-[#f10404] text-center  rounded-full  hover:bg-white hover:text-[#f10404] border hover:border-[#f10404] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline"
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default MyToyTableRow;
