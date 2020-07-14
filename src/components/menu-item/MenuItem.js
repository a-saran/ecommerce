import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`menu-item ${size}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">Show Now</div>
      </div>
    </div>
  );
};

export default MenuItem;
