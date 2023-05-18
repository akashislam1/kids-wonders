import React from "react";

const ToyTable = ({ toy, index }) => {
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
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default ToyTable;
