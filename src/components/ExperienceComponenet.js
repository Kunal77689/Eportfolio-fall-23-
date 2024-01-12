import React, { useEffect, useRef, useState } from "react";
import "./ExperienceComponent.css";
import img1 from "../images/img2.jpg";
import img2 from "../images/img1.webp";
import img3 from "../images/img3.png";

const images = [img1, img2, img3];

const content = [
  "Back End Developer at Carnegie Learning",
  "Full Stack Developer at DIAG Lab",
  "Software Developer at CHMR-FM",
];

const ExperienceComponent = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  const containerStyle = {
    transform: `translateX(${
      isVisible1 || isVisible2 || isVisible3 ? "0" : "100%"
    })`,
    opacity: isVisible1 || isVisible2 || isVisible3 ? 1 : 0,
    transition: "transform 0.6s ease, opacity 0.6s ease",
  };

  const imageStyle = {
    transform: `scale(${Math.min(1 + scrollProgress * 0.001, 2)})`,
    transition: "transform 0.6s ease",
  };

  const paragraphStyle = {
    transform: `scale(${Math.min(1 + scrollProgress * 0.001, 2)})`,
    transition: "transform 0.6s ease",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollProgress(scrollPosition);

      const triggerPoint1 = 500;
      const triggerPoint2 = 1250;
      const reductionSpeed = 0.0005;

      if (scrollPosition > triggerPoint2) {
        const progress = (scrollPosition - triggerPoint2) * reductionSpeed;
        setIsVisible1(progress <= 1);
        setIsVisible2(progress <= 1);
        setIsVisible3(progress <= 1);

        if (progress <= 1) {
          [containerRef1, containerRef2, containerRef3].forEach((ref) => {
            ref.current.style.transform = `scale(${1 - progress})`;
            ref.current.style.opacity = 1 - progress;
          });
        }
      } else if (scrollPosition > triggerPoint1) {
        [setIsVisible1, setIsVisible2, setIsVisible3].forEach(
          (setIsVisible, index) => {
            setIsVisible(true);
            [containerRef1, containerRef2, containerRef3][
              index
            ].current.style.transform = "scale(1)";
            [containerRef1, containerRef2, containerRef3][
              index
            ].current.style.opacity = 1;
          }
        );
      } else {
        [setIsVisible1, setIsVisible2, setIsVisible3].forEach((setIsVisible) =>
          setIsVisible(false)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="experience">
      <div className="vertical-line"></div>
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className={`experience-container experience-container${index} ${
            isVisible1 || isVisible2 || isVisible3 ? "visible" : ""
          }`}
          style={containerStyle}
          ref={
            index === 1
              ? containerRef1
              : index === 2
              ? containerRef2
              : containerRef3
          }
        >
          <div className={`experience-content experience-content${index}`}>
            <img
              src={images[index - 1]}
              alt={`Image ${index}`}
              className={`experience-image experience-image${index} ${
                isVisible1 || isVisible2 || isVisible3 ? "visible" : ""
              }`}
              style={imageStyle}
            />
            <div
              className={`experience-carnegie-container experience-carnegie-container${index} ${
                isVisible1 || isVisible2 || isVisible3 ? "visible" : ""
              }`}
            ></div>
            <p
              className={`experience-paragraph experience-paragraph${index} ${
                isVisible1 || isVisible2 || isVisible3 ? "visible" : ""
              }`}
              style={paragraphStyle}
            >
              {content[index - 1]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceComponent;
