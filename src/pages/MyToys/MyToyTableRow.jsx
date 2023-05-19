import React from "react";
import { Link } from "react-router-dom";
import UpdateModal from "./UpdateModal";

const MyToyTableRow = ({ toy, index }) => {
  const { _id, toy_name, price, seller_name, subCategory, available_quantity } =
    toy;
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
        {/* <Link to={`/toy-details/${_id}`}> */}
        <UpdateModal toy={toy}></UpdateModal>
        {/* </Link> */}
        <button className="font-bold text-white bg-[#f10404] text-center  rounded-full  hover:bg-white hover:text-[#f10404] border hover:border-[#f10404] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline">
          X
        </button>
      </td>
    </tr>
  );
};

export default MyToyTableRow;
