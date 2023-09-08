import React from 'react';
import './ImageComponent.css';

const ImageComponent = () => {
  return (
    <div>
    <div className="image-container">
      <img
        src="https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/616ecc1efc5e8c7002d0715b_tP5kp9pBEl-KMFSoCQQ1VzJ6bH8d_IPWb6B2YAQaiJERteHS7AVeIlxnfbzF8fCQkoY5vW-tfL8DfbR4qG8WSyYXdmQUYcWdG82ifmS6THJHwzqvCKHGGa6ZsBILSgPVaq1ys8OU%3Ds1600.png" // Replace with your image URL
        alt="Ecommerce Website"
        className="image"
      />
    <p className="image-description">1. Full-Stack ECommerce Clothing store</p>
    </div>
    <div className="image-container2">
      <img
        src="https://9to5mac.com/wp-content/uploads/sites/6/2023/04/heart-analyzer-update@0.5x.jpg?quality=82&strip=all&w=1600" // Replace with your image URL
        alt="Ecommerce Website"
        className="image"
      />
    <p className="image-description2">2. Health Report Analyzer</p>
    </div>
    <div className="image-container3">
      <img
        src="https://cdn.dribbble.com/users/1972196/screenshots/11589416/4.png" // Replace with your image URL
        alt="Ecommerce Website"
        className="image"
      />
    <p className="image-description3">3. Social Media App</p>
    </div>
    </div>
  );
};

export default ImageComponent;
