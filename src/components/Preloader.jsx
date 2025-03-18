import React from "react";

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="preloader-close">x</div>
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1" />
        <div className="sk-child sk-bounce2" />
        <div className="sk-child sk-bounce3" />
      </div>
    </div>
  );
};

export default Preloader;
