import React from "react";
import image from "../assets/images.jpg";

function Logo({ width = "60px", className }) {
  return (
    <img
      src={image}
      alt="Logo"
      className={className}
      style={{
        width,
        height: width,
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
}
export default Logo;