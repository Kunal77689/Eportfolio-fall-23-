import React from "react";
import "./ImageComponent.css";
import img1 from "../images/website.png";
import img2 from "../images/chmr app.png";
import img3 from "../images/Tinder-Gold-Details-2.webp";

const ImageComponent = () => {
  return (
    <div>
      <div className="image-container">
        <img
          src={img1} // Replace with your image URL
          alt="Ecommerce Website"
          className="image"
        />
        <p className="image-description">
          1. Full-Stack ECommerce Clothing store
        </p>
      </div>
      <div className="image-container2">
        <img
          src={img2} // Replace with your image URL
          alt="Ecommerce Website"
          className="image"
        />
        <p className="image-description2">2. Data Management System</p>
      </div>
      <div className="image-container3">
        <img
          src={img3} // Replace with your image URL
          alt="Ecommerce Website"
          className="image"
        />
        <p className="image-description3">3. Tinder Clone</p>
      </div>
    </div>
  );
};

export default ImageComponent;
