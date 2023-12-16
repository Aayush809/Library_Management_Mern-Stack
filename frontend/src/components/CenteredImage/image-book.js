import React from 'react';
import './FullWidthImage.css'; // Import the CSS file

const FullWidthImage = () => {
  return (
    <div className="full-width-container">
      <img
        src="https://images.pexels.com/photos/6334916/pexels-photo-6334916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="full-width-image"
      />
    </div>
  );
};

export default FullWidthImage;
