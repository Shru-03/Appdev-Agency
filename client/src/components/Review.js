import React from "react";
import img6 from "../Images/google.png";
import "../index.css";

export const Review = () => {
  return (
    <div>
      <section class="review" id="review">
        <h1 class="review-text" style={{ color: "grey" }}>
          Our Customers
          <span style={{ color: "rgb(189, 58, 58)" }}>Reviews</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <img src={img6} alt="" />
            <h3>John Deo</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus,
            </p>
          </div>
          <div class="box">
            <img src={img6} alt="" />
            <h3> Harry</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus,
            </p>
          </div>
          <div class="box">
            <img src={img6} alt="" />
            <h3>Peter </h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus,
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
