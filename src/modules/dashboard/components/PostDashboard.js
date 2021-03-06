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
            <img src={datosImg} alt="datos" width="130" height="120" />
            <div className="d-flex flex-column  div-status flex-wrap justify-content-around text-dashboard">
              <div className="d-flex justify-content-between">
                <div className="d-flex ">
                  <div className="ico-play d-flex justify-content-center align-items-center">
                    <img src={PlayIco} alt="play ico" width="10" />
                  </div>
                  <span>Status</span>
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
