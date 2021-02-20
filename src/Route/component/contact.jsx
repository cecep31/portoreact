import React from "react";
import "../../App.css";

const contact = () => {
  return (
    <center className="container mx-auto bg-green-500 my-4">
      <div className="py-4 text-xl">Contact</div>
      <div id="contact" className="content-center">
        <form className="from-gray-500" action="" method="post">
          <div>
            <label htmlFor="nama">nama</label>
            <input
              type="text"
              name=""
              className="border-black bg-gray-400"
              id=""
            />
          </div>
          <div>
            <label htmlFor="">E-mail</label>
            <input type="email" className="rounded-sm" name="" id="" />
          </div>
          <div>
              <label htmlFor="Massage"></label>
                <textarea name="" id="" cols="30" rows="9"></textarea>
          </div>
        </form>
      </div>
    </center>
  );
};

export default contact;
