import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import TechnologyStack from "./TechnologyStack";
import ResourceStack from "./ResourceStack";

import * as carouselStyles from "../styles/Carousel/Carousel.module.css";

const allImages = {
  p_1: (
    <StaticImage
      className={carouselStyles.image}
      src="../images/portfolio_1.png"
      alt="carousel_image_1"
      layout="fixed"
      width={400}
      height={200}
    />
  ),
  p_2: (
    <StaticImage
      className={carouselStyles.image}
      src="../images/p_2.png"
      alt="carousel_image_2"
      layout="fixed"
      width={400}
      height={200}
    />
  ),
  p_3: (
    <StaticImage
      className={carouselStyles.image}
      src="../images/p_3.png"
      alt="carousel_image_3"
      layout="fixed"
      width={400}
      height={200}
    />
  ),
};

interface CarouselProps {
  projectId?: string;
  projectTitle: string;
  details: string;
  images: string[];
  projectDescription?: string;
  techStacl: string[];
}

interface SlideshowButtonProps {
  direction: "left" | "right";
  handleSlideChange: () => void;
}

const SlidehowButton = ({
  direction,
  handleSlideChange,
}: SlideshowButtonProps) => {
  return (
    <button
      className={carouselStyles.slideShowwButton}
      onClick={handleSlideChange}
    >
      {direction === "right" ? <FaArrowRight /> : <FaArrowLeft />}
    </button>
  );
};

const Carousel = ({
  projectTitle,
  projectDescription,
  images,
  details,
}: CarouselProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") {
        handleNextSlide();
      } else if (e.key === "ArrowLeft") {
        handlePrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className={carouselStyles.carousel}>
      <div className={carouselStyles.title}>
        <h1>{projectTitle}</h1>
      </div>
      <div className={carouselStyles.carouselImageContainer}>
        {images
          .slice(activeSlide, activeSlide + 2)
          .map((imageKey) => allImages[imageKey])}
      </div>

      <div className={carouselStyles.carouselControls}>
        <SlidehowButton direction="left" handleSlideChange={handlePrevSlide} />
        <SlidehowButton direction="right" handleSlideChange={handleNextSlide} />
      </div>
      <div>
        <p>{projectDescription}</p>
        <hr />
      </div>
      <div>
        <h2>Details</h2>
        <p>{details}</p>
      </div>
      <TechnologyStack />
      <div>
        <h2>Resources</h2>
        <ResourceStack links={["1", "2", "3"]} />
      </div>
    </div>
  );
};

export default Carousel;
