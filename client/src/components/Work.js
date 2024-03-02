import React, { useEffect, useRef, forwardRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../Images/activity_tracking_app_2_4x.png";
import img2 from "../Images/Ecommerce app.png";
import img3 from "../Images/crypto.webp";
import img4 from "../Images/food.jpg";
import img5 from "../Images/travel.jpg";
import img6 from "../Images/music.png";
import "../index.css";

const Work = forwardRef((props, ref) => {
  const imageListRef = useRef(null);
  const slideButtonsRef = useRef([]);
  const sliderScrollbarRef = useRef(null);
  const scrollbarThumbRef = useRef(null);

  useEffect(() => {
    const imageList = imageListRef.current;
    const slideButtons = slideButtonsRef.current;
    const sliderScrollbar = sliderScrollbarRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const handleSlideButtons = () => {
      slideButtons[0].style.display =
        imageList.scrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    const handleButtonClick = (direction) => {
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    slideButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const direction = index === 0 ? -1 : 1;
        handleButtonClick(direction);
      });
    });

    imageList.addEventListener("scroll", () => {
      handleSlideButtons();
      updateScrollThumbPosition();
    });

    return () => {
      slideButtons.forEach((button, index) => {
        button.removeEventListener("click", () => {
          const direction = index === 0 ? -1 : 1;
          handleButtonClick(direction);
        });
      });

      imageList.removeEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
      });
    };
  }, []);
  return (
    <div ref={ref}>
      <h1 className="heading">OUR WORK</h1>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Affordable service, without sacrificing quality.
      </p>
      <div className="slider" ref={sliderScrollbarRef}>
        <div className="slider-wrapper">
          <button
            className="slide-button"
            id="prev-slide"
            ref={(el) => (slideButtonsRef.current[0] = el)}
          >
            <FaChevronLeft size={30} />
          </button>
          <div className="img-list" ref={imageListRef}>
            <div className="img-item">
              <img src={img1} alt="img" />
              <h4>Fitness & Activity Tracking App</h4>
            </div>
            <div className="img-item">
              <img src={img2} alt="img" />
              <h4>E-commerce App</h4>
            </div>
            <div className="img-item">
              <img src={img3} alt="img" />
              <h4>Crypto Currency Tracker</h4>
            </div>
            <div className="img-item">
              <img src={img4} alt="img" />
              <h4>Online Food Ordering App</h4>
            </div>
            <div className="img-item">
              <img src={img5} alt="img" />
              <h4>Travel & Tourism Website</h4>
            </div>
            <div className="img-item">
              <img src={img6} alt="img" />
              <h4>Online Music Listening WebApp</h4>
            </div>
          </div>
          <button
            className="slide-button"
            id="next-slide"
            ref={(el) => (slideButtonsRef.current[1] = el)}
          >
            <FaChevronRight size={30} />
          </button>
        </div>
        <div className="slider-scrollbar">
          <div className="scrollbar-track">
            <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Work;
