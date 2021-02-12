import React from "react";
import "../../app.css";
import Bigi from "../component/img/bug.jpg";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <center className="mb-4">
      <section
        className="bg-fixed bg-no-repeat lg:bg-cover"
        style={{ backgroundImage: `url(${Bigi})` }}
      >
        <div className="pt-20">
          <div className="">
            <div className="font-bold text-6xl">Iqbla Satria Perdana</div>
            <div className="font-bold text-6xl ml-3 text-red-600">
              (Baleyadana)
            </div>
          </div>
          <div className="text-2xl mt-2 text-white">
            <p>
              iqbal satria perdana biasa di panggil iqbal yang lebih dikenal{" "}
              <br /> di dunia maya sebagai Bale adalah selebgram, influenser dan{" "}
              <br /> juga seorang mahasiswa di pergurua tinggi institut
              pertanian bogor{" "}
            </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center pb-36 ">
            <div className="rounded-md shadow">
              <NavLink exact to="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get Contact
              </NavLink>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <NavLink
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                exact
                to="/about"
              >
                About me
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </center>
  );
};

export default Main;
