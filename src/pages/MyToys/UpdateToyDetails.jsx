import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const UpdateToyDetails = () => {
  useTitle("Update toy details");
  const singledata = useLoaderData();
  const { _id, price, detail_description, available_quantity } =
    singledata || {};
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const data = {
      _id,
      price: price,
      available_quantity: quantity,
      detail_description: description,
    };
    Swal.fire({
      title: "Are you Confirm?",
      text: "You want to confirm it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes ",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://kids-wonders-server.vercel.app/update-toy/${data?._id}`,
          {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Confirmed!", "Your file has been updated.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full md:w-3/4 mx-auto">
      <h2 className="text-center font-bold text-4xl underline mt-5 mb-8">
        <span className="text-[#4acdd5] underline">Update</span> the Toy
        information
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4 w-full p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              required
              className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Available quantity
            </label>
            <input
              type="text"
              name="quantity"
              required
              defaultValue={available_quantity}
              className="mt-1 px-3 py-1 block w-full border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Details Description
          </label>
          <textarea
            name="description"
            rows="3"
            required
            defaultValue={detail_description}
            className="mt-1 block w-full p-4 border border-[#4acdd5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4acdd5] focus:border-transparent"
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="font-bold text-white bg-[#4acdd5] text-center  rounded  hover:bg-white hover:text-[#4acdd5] border hover:border-[#4acdd5] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline "
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToyDetails;
