import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about">
      <div className="ab-content">
        <h1>Who we are ?</h1>
        <h3 style={{ marginTop: "20px" }}>
          A global IT company leader offering innovative and sustainable
          solutions for customers.
        </h3>
        <p>
          Our mission is to strengthen our clients business and enhance their
          knowledge, update about latest technologies by adding important value
          to the business. Our efficient team update our clients with latest
          information and make it accessible and useful to enable growth in
          business.
        </p>
      </div>
    </div>
  );
});
export default About;
