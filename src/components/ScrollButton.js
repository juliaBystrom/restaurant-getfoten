import React, { useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";
import "../App.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    }/*  else if (scrolled <= 0) {
      setVisible(true);
    } */
  };

  const scrollToBottom = () => {
    // Scroll window height minus the height of the header
    window.scrollTo({
      top: document.documentElement.clientHeight - 80,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);


  return (
    <button className="hide-on-none-mobile" id="scroll-button" style={{ display: visible ? "inline" : "none" }}
    >
      <AiFillDownCircle
        onClick={scrollToBottom}
        style={{ display: visible ? "inline" : "none" }}

      />
    </button>
  );
};

export default ScrollButton;
