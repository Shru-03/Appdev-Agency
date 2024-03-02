import React from "react";
import logo from "../../Images/App-logo.png";

const Header = ({ sec1, sec2, sec3, sec4, sec5 }) => {
  return (
    <div>
      <header>
        <input type="checkbox" name="" id="chk1" />
        <div className="logo">
          <img src={logo} alt="logo" height="90px"></img>
        </div>
        <ul>
          <li>
            <a
              onClick={() =>
                sec2.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                sec4.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Portfolios
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                sec3.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              About us
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                sec5.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="menu">
          <label for="chk1">
            <i className="fa fa-bars"></i>
          </label>
        </div>
      </header>
      <section className="intro">
        <div className="text">
          <h1>Transforming Ideas </h1>
          <h1>Into Digital Experiences.</h1>
          <p>We will bring your app to life</p>
        </div>
      </section>
      <button
        className="btn"
        onClick={() => sec5.current.scrollIntoView({ behavior: "smooth" })}
      >
        TALK TO US
      </button>
    </div>
  );
};

export default Header;
