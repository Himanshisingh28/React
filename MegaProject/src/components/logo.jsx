import React from "react";
import image from "../assets/images.jpg";

function Logo({ width = "100px", className }) {
  return (
    <img
      src={image}
      alt="Logo"
      className={className}
      style={{
        width,
        borderRadius: "50%", // fully circular
        objectFit: "cover",  // taaki image crop ho na ki squeeze
      }}
    />
  );
}

export default Logo;