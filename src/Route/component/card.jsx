import React from "react";
import ibal from "./img/ibal.jpg";
import ibal3 from "./img/ibal3.jpg";

const Card = () => {
  return (
    <div className="md:flex md:justify-between md:mt-24">
      <div className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl group hover:shadow hover:bg-gray-500">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={ibal}
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-red-500 font-semibold group-hover:text-white">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline "
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500 group-hover:text-indigo-50" >
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl group hover:shadow hover:bg-gray-500 sm:mt-4 md:mt-0">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={ibal3}
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-red-500 font-semibold group-hover:text-white">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500 group-hover:text-white">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;