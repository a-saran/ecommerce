import React from "react";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">Hats</div>
            <div className="subtitle">Show Now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Jackets</div>
            <div className="subtitle">Show Now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Sneakers</div>
            <div className="subtitle">Show Now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Men</div>
            <div className="subtitle">Show Now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Women</div>
            <div className="subtitle">Show Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
