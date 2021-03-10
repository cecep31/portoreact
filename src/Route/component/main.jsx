import React from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";
import Ibalku from '../component/img/ibal.jpg'

const Main = () => {
  return (
    <center className="">
      <section id="about"
        className="bg-green-500 bg-no-repeat lg:bg-cover pt-16"
      >
        <div><img src={Ibalku} className="rounded-full flex items-center justify-center pt-20" width="200px" alt=""/></div>
        <div className="">
          <div className="">
            <div className="font-bold text-6xl">Iqbla Satria Perdana</div>
            <div className="font-bold text-6xl ml-3 text-red-600">
              (Baleyadana)
            </div>
          </div>
          <div className="text-2xl mt-2 text-black">
            <p>
              iqbal satria perdana biasa di panggil iqbal yang lebih dikenal{" "}
              <br /> di dunia maya sebagai Bale adalah selebgram, influenser dan{" "}
              <br /> juga seorang mahasiswa di pergurua tinggi institut
              pertanian bogor{" "}
            </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center pb-28">
            <div className="rounded-md shadow">
             
                Get Contact
              
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
            
                About me
             
            </div>
          </div>
        </div>
      </section>
    </center>
  );
};

export default Main;
