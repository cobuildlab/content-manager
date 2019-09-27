import React from "react";

const socialBar = ({ ico, alt }) => {
  return (
    <div className=" d-flex">
      <div className="social-bar1 d-flex align-items-center">
        <img src={ico} alt={alt} />
      </div>
      <div className="social-bar2 d-flex justify-content-between align-items-center">
        <span>@loremIpsum</span>
        <div className="d-flex">
          <div>999 post</div>
          <div>30 mentions</div>
        </div>
      </div>
    </div>
  );
};

export default socialBar;
