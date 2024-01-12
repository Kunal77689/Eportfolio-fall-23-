import React, { useEffect, useState } from "react";
import "./Introduction.css";

const Introduction = () => {
  const roles = [
    "Backend developer",
    "Software Developer",
    "Frontend developer",
    "Full-Stack developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState("");

  const typeRole = () => {
    const currentRole = roles[roleIndex];
    if (isTyping && charIndex < currentRole.length) {
      setText((prevText) => prevText + currentRole.charAt(charIndex));
      setCharIndex((prevIndex) => prevIndex + 1);
    } else if (!isTyping && charIndex >= 0) {
      setText((prevText) => prevText.slice(0, -1));
      setCharIndex((prevIndex) => prevIndex - 1);
    } else {
      setIsTyping((prevIsTyping) => !prevIsTyping); // Toggle typing/deleting
      if (!isTyping) {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to the next role or loop back
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(typeRole, isTyping ? 100 : 50); // Typing speed: 100ms, Deleting speed: 50ms

    return () => clearTimeout(timer);
  }, [text, roleIndex, charIndex, isTyping]);

  return (
    <div className="introduction-container">
      <p className="introduction-text">I'm Kunal Sikka</p>
      <div className="roles-container">
        <p className="role-text">{text}</p>
      </div>
      <p className="experience-text">
        A budding Full Stack and Java Developer with relevant experience who
        welcomes opportunities involving the enhancement of knowledge and
        skills. Passionate to explore challenging technological roles that
        promise overall professional and personal development
      </p>
    </div>
  );
};

export default Introduction;
