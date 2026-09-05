import React from "react";
import image from "../assets/images.jpg";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src={image}
        alt="Logo"
        style={{ width: width }}
      />
    </div>
  );
}

export default Logo;