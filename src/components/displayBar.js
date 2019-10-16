import React from "react";

const DisplayBar = props => {
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
          <p>{value.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayBar;
