import React from "react";
import floatImg from "../Images/Mobile-App.png";
import "../index.css";
import { MdContentPasteSearch } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { TbDeviceMobileHeart } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn, MdAppSettingsAlt } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";

const Features = () => {
  return (
    <div className="features">
      <div className="feat-text">
        <h1>Why Choose Us?</h1>
        <p>
          Experience A World-Class Mobile App Development Service from Best{" "}
          <span style={{ color: "green", fontSize: "25px" }}>
            Mobile App Development Company
          </span>
        </p>
      </div>
      <section class="home" id="home">
        <div class="f-image">
          <img src={floatImg} alt="" />
        </div>
        <div class="content">
          <div class="row">
            <div class="column">
              <div class="card">
                <IoIosPeople size={40} />
                <p>Super-Skilled Developers</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <TbDeviceMobileHeart size={40} />
                <p>Creative App Ideas</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <FaHandHoldingDollar size={40} />
                <p>Superior Quality</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <MdOutlineAssignmentTurnedIn size={40} />
                <p>Easy To Use Apps</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <MdContentPasteSearch size={40} />
                <p>Free Cost Analysis</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <FaRegHandshake size={40} />
                <p>Hand Holding Approach</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <MdAppSettingsAlt size={40} />
                <p>Fully Customized</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <RiCustomerService2Fill size={40} />
                <p>24x7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
