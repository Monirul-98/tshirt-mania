import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Welcome to T-Shirt Mania</h1>
      <nav>
        <ul>
          <li>
            <CustomLink to="/home">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/orderreview">Order Review</CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
