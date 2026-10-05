import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-700 mb-5 mt-10">Find Us On</h2>
      <button className="socialBtn">
        {" "}
        <CiFacebook size={18}></CiFacebook> Facebook
      </button>
      <button className="socialBtn">
        <CiTwitter size={18} />
        Twitter
      </button>
      <button className="socialBtn">
        {" "}
        <CiInstagram size={18} />
        Instagram
      </button>
    </div>
  );
};

export default FindUs;
