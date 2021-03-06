import React from "react";

const MediaBar = props => {
  console.log(props);
  const { data, change } = props;
  return (
    <div className="d-flex">
      {data.map((value, index) => (
        <div
          onClick={e => change(index)}
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
