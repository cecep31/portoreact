import React from "react";
import "../../App.css";

const contact = () => {
  return (
    <center className="container mx-auto bg-green-500 my-4 rounded-sm shadow-sm">
      <div className="py-4 text-6xl font-bold">Contact</div>
      <div id="contact" className="content-center">
        <form className="from-gray-500 py-4" action="https://www.linkedin.com/in/cecep-januardi-9483101a5/" method="post">
          <div>
            <label className="text-2xl" htmlFor="nama">nama</label>
          </div>
          <input
            type="text"
            name=""
            className="border-black h-8 w-80 text-3xl "
            id=""
          />
          <div className="block flex-none">
            <label className="text-2xl" htmlFor="">E-mail</label>
          </div>
          <input type="email" className="rounded-sm h-8 w-80 text-3xl" name="" id="" />
          <div>
            <label className="text-2xl" htmlFor="Massage">Message</label>
          </div>
          <textarea className=" w-80" name="" id="" cols="30" rows="9"></textarea>
          <div>
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </center>
  );
};

export default contact;
