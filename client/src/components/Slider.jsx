import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.scss";

function Slider() {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item className="slides" controls={false}>
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp"
            alt="First slide"
          />
          <Carousel.Caption className="carousel__text">
            <span>Women Collection 2018</span>
            <h2>NEW SEASON</h2>
            <button>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slides" controls={false}>
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp"
            alt="Second slide"
          />

          <Carousel.Caption className="carousel__text">
            <span>Women Collection 2018</span>
            <h2>NEW SEASON</h2>
            <button>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slides" controls={false}>
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel__text">
          <span>Women Collection 2018</span>
          <h2>NEW SEASON</h2>
          <button>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
