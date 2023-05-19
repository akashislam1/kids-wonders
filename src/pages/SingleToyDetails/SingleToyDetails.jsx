import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { useScrollTop } from "../../Hooks/useScrollTop";
import { Rating } from "@smastrom/react-rating";

const SingleToyDetails = () => {
  const singledata = useLoaderData();
  const { pathname } = useLocation();
  useScrollTop(pathname);
  const {
    _id,
    toy_name,
    picture,
    price,
    rating,
    seller_name,
    seller_email,
    detail_description,
    available_quantity,
  } = singledata || {};

  return (
    <div className="w-full md:w-2/3 mx-auto">
      <h2 className="text-center font-bold text-4xl underline mt-5 mb-8">
        <span className="text-[#4acdd5] underline">Toy</span> Details
      </h2>
      <div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="my-4 rounded-md border border-[#4acdd5]  flex flex-col justify-between gap-3 p-5 shadow-xl"
        >
          <img className="w-64 mx-auto" src={picture} alt="" />
          <div className="mb-4">{detail_description}</div>
          <div className="text-center border-t-2 space-y-4">
            <h2 className="font-bold text-xl mt-2">Name : {toy_name}</h2>
            <div className="font-bold">
              <h3>Seller name : {seller_name}</h3>
              <p>Seller email : {seller_email}</p>
            </div>
            <div>
              <p>Price : ${price}</p>
              <p>Available quantity : {available_quantity}</p>
            </div>
            <div className="flex justify-center">
              <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(rating || 0)}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
