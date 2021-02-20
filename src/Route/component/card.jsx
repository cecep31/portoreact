import React from "react";
import ibal from "./img/ibal.jpg";
import ibal3 from "./img/ibal3.jpg";
import sma from "./img/sma.jpeg";
import ipb from "./img/ipbn.png";

const Card = () => {
  return (
    <div id="port" className="md:flex md:justify-between mt-5">
      <div className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl group hover:shadow hover:bg-green-600 sm">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div>
              <img
                className="h-48 w-full object-cover md:w-48"
                src={ipb}
                alt="Man looking at item at a store"
              />
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-red-500 font-semibold group-hover:text-white">
              Study on Progress
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline group-hover:text-red-600"
            >
              Institut Pertanian Bogor
            </a>
            <p className="mt-2 text-gray-500 group-hover:text-indigo-50">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl group hover:shadow hover:bg-green-600">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={sma}
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-red-500 font-semibold group-hover:text-white">
              Last Study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline group-hover:text-red-600"
            >
              SMA N 1 Solok Selatan
            </a>
            <p className="mt-2 text-gray-500 group-hover:text-indigo-50">
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
