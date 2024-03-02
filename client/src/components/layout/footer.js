import React, { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import twitter from "../../Images/twitter.png";
import instagram from "../../Images/instagram.png";
import facebook from "../../Images/facebook.png";
import "../../index.css";

const Footer = ({ sec2, sec3, sec5 }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="footer">
      <h4 style={{ marginBottom: "20px" }}>
        Created by <span style={{ color: "green" }}>Shruti Sharma</span> | All
        Right Reserved &copy;{" "}
      </h4>
      <p>
        <a
          onClick={() => sec3.current.scrollIntoView({ behavior: "smooth" })}
          className="foot-link"
        >
          About{" "}
        </a>
        <span>|</span>{" "}
        <a
          onClick={() => sec5.current.scrollIntoView({ behavior: "smooth" })}
          className="foot-link"
        >
          Contact{" "}
        </a>
        <span>|</span>{" "}
        <a
          onClick={() => sec2.current.scrollIntoView({ behavior: "smooth" })}
          className="foot-link"
        >
          Services{" "}
        </a>
      </p>
      <span className="logo-img">
        <a href="https://www.twitter.com/" target="blank">
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.facebook.com/" target="blank">
          <img src={facebook} alt="" />
        </a>
      </span>

      {/*scroll top button */}
      <IoIosArrowDropupCircle
        id="scroll-top"
        className={isActive ? "active" : ""}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
};

export default Footer;
