import React from "react";
import datosImg from "../../../images/datos.jpeg";
import PlayIco from "../../../assets/ico/play.svg";
import CalendarIco from "../../../assets/ico/calendar.svg";
import CheckIco from "../../../assets/ico/check.svg";

const postfake = [1, 2, 3, 4, 5, 6];

const PostDashboard = () => {
  return (
    <div>
      {postfake.map(value => {
        return (
          <div className=" d-flex text-white post-information">
            <img src={datosImg} alt="datos" width="110" height="110" />
            <div className="d-flex flex-column flex-wrap justify-content-around text-dashboard">
              <div className="d-flex justify-content-between">
                <div className="d-flex ">
                  <img src={PlayIco} alt="play ico" width="15" />
                  Status
                </div>
                <div>
                  <span>Approved</span>
                  <img src={CheckIco} alt="check ico" />
                </div>
              </div>
              <div>
                <img src={CalendarIco} alt="block ico" width="20" />
                12/02/2019-6:30pm
              </div>

              <p className="text-dashboard">
                Lorem ipsum dolor sit amet consectetur adipiscing elit lacus
                semper nisl.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostDashboard;
