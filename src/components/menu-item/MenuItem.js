import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">Show Now</div>
      </div>
    </div>
  );
};

export default MenuItem;
