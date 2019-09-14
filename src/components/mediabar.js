import React, { useState, useEffect } from "react";

const MediaBar = ({ ico, icoDescription, text }) => {
  return (
    <div
      onClick={() => {
        console.log();
      }}
      className={"media-bar d-flex justify-content-center align-items-center"}
    >
      <img src={ico} alt={icoDescription} />

      {text ? <p>{text}</p> : <></>}
    </div>
  );
};

export default MediaBar;
