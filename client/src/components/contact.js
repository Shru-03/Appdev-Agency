import React, { forwardRef, useState } from "react";

import "../index.css";

import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import GB from "country-flag-icons/react/3x2/GB";
import IN from "country-flag-icons/react/3x2/IN";

const Contact = forwardRef((props, ref) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const baseUrl = "http://localhost:5000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      name: name,
      message: message,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };
  return (
    <div ref={ref}>
      <div className="contact" id="contact">
        <h1 className="heading">
          <span>Contact Us</span>
        </h1>
        <div className="con-container">
          <div className="con-text">
            <h2>
              Top <span style={{ color: "green" }}> App Developers</span>{" "}
              inEasy-Web-Plan
            </h2>
            <br />
            <p style={{ marginLeft: "60px" }}>
              App Dev has fanatical high standards of development trusted by
              Government,
              <br /> Small/Medium sized businesses and Start-ups.
            </p>
            <div className="con-info">
              <div className="address">
                <address id="add1">
                  <IN className="flag" /> CHANDIGARH SCO 120, Sector 38,
                  Chandigarh (UT), India (160036)
                  <br />
                  <span>
                    <IoCall /> Call At : +91-172-6588530 Mobile : +91-9874563210
                  </span>
                </address>
                <address id="add2">
                  <GB className="flag" /> LONDON 133 Creek Road, Greenwich,
                  London, SE8 3BU United Kingdom
                  <br />
                  <span>
                    <IoCall /> Call At: +44 74684 420 316, Mobile: +44 7878 1234
                    66
                  </span>
                </address>

                <span id="e-sec" style={{ fontStyle: "italic" }}>
                  <MdOutlineEmail size={30} /> appdev@gmail.com
                </span>
                <h3 id="q-sec">We'd love to hear from you</h3>
              </div>
            </div>
          </div>
          <div className="C-container">
            <div className="c-body">
              <div className="main">
                <div className="contact">
                  <form>
                    <label for="chk" aria-hidden="true" className="c-label">
                      Let's Build Your Dream App
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="c-input"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="c-input"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <textarea
                      placeholder="What's your project Idea?"
                      className="c-textarea"
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>

                    <button className="con-btn" onClick={() => sendEmail()}>
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
