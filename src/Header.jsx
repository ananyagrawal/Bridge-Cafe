import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const links = [
    { label: "Order Online", to: "/order-online" },
    { label: "Book Table", to: "/book-table" },
    { label: "Private Event Inquiries", to: "/event-inquiry" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <nav className="header-container">
      <Link to="/" onClick={() => handleLinkClick(null)}>
        <img className="cafe-logo" src={logo} alt="logo" />
      </Link>
      <div className="link-container">
        {links.map((link, index) => (
          <Link
            key={index}
            onClick={() => handleLinkClick(index)}
            className={activeLink === index ? "active" : ""}
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
