import React, { useState, useEffect } from "react";
import TextIco from "../assets/ico/text.svg";
import PictureIco from "../assets/ico/picture.svg";
import VideoIco from "../assets/ico/video.svg";
import GifIco from "../assets/ico/gif.svg";

const MediaBar = () => {
  const data = [
    {
      ico: TextIco,
      content: "text",
      alt: "text ico",
      active: true
    },
    {
      ico: PictureIco,
      content: "Pictore(s)",
      alt: "picture ico",
      active: false
    },
    {
      ico: VideoIco,
      content: "Video",
      alt: "video ico",
      active: false
    },
    {
      ico: GifIco,
      content: "Animate GIF",
      alt: "gif ico",
      active: false
    }
  ];

  return (
    <div className="d-flex">
      {data.map((value, index) => (
        <div
          key={index}
          className={`media-bar d-flex justify-content-center align-items-center ${
            value.active === true ? "media-bar-onclik" : " "
          } `}
        >
          <img src={value.ico} alt={value.alt} />

          <p>{value.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MediaBar;
