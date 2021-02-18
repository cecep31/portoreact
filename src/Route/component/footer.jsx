import { Container, Typography } from "@material-ui/core";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const footer = () => {
  return (
    <div id="foot" className="mt-5">
      <center>
        <div className="h-5 pt-10 pb-20 border-black shadow-md bg-green-600 mx-auto">
          <TwitterIcon className="cursor-pointer ml-2" />
          <FacebookIcon className="cursor-pointer ml-2" />
          <InstagramIcon className="cursor-pointer ml-2" />
        <div className="mt-2 ">design by <a className="hover:text-red-600 hover:underline text-gray-700" href="https://www.linkedin.com/in/cecep-januardi-9483101a5/">Pilput</a></div>
        </div>
      </center>
    </div>
  );
};

export default footer;
