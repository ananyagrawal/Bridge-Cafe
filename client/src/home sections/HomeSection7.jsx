import styles from "./Section7.module.css";
import map from "../assets/images/map.png";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
const HomeSection7 = () => {
  return (
    <div className={styles.section_container}>
      <div className={styles.map_container}>
        <img className={styles.map_image} src={map} alt=""></img>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.sub_container}>
          <div className={styles.social_media_container}>
            <Link to="/">
              <button>
                <AiFillInstagram size={28} />
              </button>
            </Link>
            <Link to="/">
              <button>
                <FaFacebookF size={28} />
              </button>
            </Link>
            <Link to="/">
              <button>
                <BsTwitter size={28} />
              </button>
            </Link>
          </div>
          <div style={{ fontSize: "20px", color: "white" }}>
            Food is the heart of our restaurant, and we take great pride in
            serving only the highest quality meals to our guests.
          </div>
          <div>
            <Link to="/order-online">
              <button className={styles.order_button}>Order Now</button>
            </Link>
          </div>
        </div>
        <div className={styles.copyright_container}>
          <BiCopyright />
          <p>Copyright 2023. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default HomeSection7;
