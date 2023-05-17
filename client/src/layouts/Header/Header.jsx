import React from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const index = links.findIndex((link) => link.to === path);
    setActiveLink(index);
  }, [location.pathname]);

  const links = [
    { label: "Order Online", to: "/order-online" },
    { label: "Book Table", to: "/book-table" },
    { label: "Private Event Inquiries", to: "/event-inquiry" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className={styles.header_container}>
      <Link to="/">
        <img className={styles.cafe_logo} src={logo} alt="logo" />
      </Link>
      <div className={styles.link_container}>
        {links.map((link, index) => (
          <Link
            key={index}
            style={{ color: activeLink == index ? "#e8522a" : "" }}
            to={link.to}
            className={styles.link}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
