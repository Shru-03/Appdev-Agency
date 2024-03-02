import React, { forwardRef } from "react";
import { AiOutlineApple, AiOutlineAndroid } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { SiReactos } from "react-icons/si";
import img1 from "../Images/web dev .jpeg";
import img2 from "../Images/uiux.jpeg";
import img3 from "../Images/dig.jpeg";
import img4 from "../Images/maintanance-and-support.jpg";
import img5 from "../Images/mobileapp.jpg";
import img6 from "../Images/Ecommerce.png";
import "../index.css";

const Services = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="services" id="gallery">
        <h1 className="heading">OUR SERVICES</h1>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Affordable service, without sacrificing quality.
        </p>
        <div className="box-container">
          <div className="box">
            <img src={img1} />
            <h3>Custom Web Development Services</h3>
            <div className="content">
              <p>
                Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                Deleniti, Ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img2} />
            <h3>UI/UX Designing</h3>
            <div className="content">
              <p>
                Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                Deleniti, Ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img3} />
            <h3>Digital Marketing</h3>
            <div className="content">
              <p>
                Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                Deleniti, Ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img4} />
            <h3>Maintanance Services</h3>
            <div className="content">
              <p>
                Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                Deleniti, Ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img5} />
            <h3>Cross-Platform App Development</h3>
            <div className="content">
              <p>
                Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                Deleniti, Ipsum.
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img6} />
            <h3>Ecommerce Development</h3>
            <div className="content">
              <p>
                Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                Deleniti, Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service2">
        <div className="service-text">
          <p>
            Vast Mobile App Development
            <br /> Services We Offer
          </p>
        </div>
        <div className="service-cardlist">
          <div className="card" id="c-1">
            <AiOutlineApple size={70} />
            <h3>IOS App Development</h3>
          </div>
          <div className="card" id="c-2">
            <AiOutlineAndroid size={70} />
            <h3>Android App Development</h3>
          </div>
          <div className="card" id="c-3">
            <FaComputer size={70} />
            <h3>Web App Development</h3>
          </div>
          <div className="card" id="c-4">
            <SiReactos size={70} />
            <h3>Hybrid App Development</h3>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Services;
