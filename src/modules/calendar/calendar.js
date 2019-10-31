import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import DashborNav from "../../components/dashboardNav";
import CalendarNav from "./components/calendarNav";
import "./calendar.css";
import CalendarIco from "../../assets/ico/calendar.svg";
import Block from "../../assets/ico/block.svg";
import moment from "moment";
import All from "../../assets/ico/all.svg";
import Pause from "../../assets/ico/pause.svg";
import Play from "../../assets/ico/play.svg";
import Create from "../../assets/ico/create.svg";
import Facebook from "../../assets/ico/facebook.svg";
import Twitter from "../../assets/ico/twitter.svg";
import Posts from "./components/posts";

const weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
const weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = moment.months();

const Calendar = props => {
  const [dateContext, setDateContext] = useState(moment());
  const [showByMonths, setShowByMonths] = useState(false);

  const year = () => {
    return dateContext.format("Y");
  };

  const month = () => {
    return dateContext.format("MMMM");
  };

  const daysInMonth = () => {
    return dateContext.daysInMonth();
  };

  const currentDate = () => {
    return dateContext.get("date");
  };

  const currentDay = () => {
    return dateContext.format("D");
  };

  const firstDayOfMonth = () => {
    const firstDay = moment(dateContext)
      .startOf("month")
      .format("d"); // Day of week 0...1..5...6
    return firstDay;
  };

  const selectMonth = month => {
    let monthNo = months.indexOf(month);
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(dateContext).set("month", monthNo);
    setDateContext(newDateContext);
  };

  const onChangeShowByMonths = () => {
    setShowByMonths(!showByMonths);
  };

  const blanks = [];

  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(" ");
  }
  console.log("blanks: ", blanks);

  const daysInMonths = [];

  for (let d = 1; d <= daysInMonth(); d++) {
    daysInMonths.push(d);
  }

  console.log("days: ", daysInMonth);

  const calendarShow = [...blanks, ...daysInMonths];

  const styleIcoBlock = {
    marginRight: 10,
    cursor: "pointer"
  };
  return (
    <div className="calendar-container d-flex">
      <DashborNav />

      <CalendarNav change={selectMonth} data={months} />
      {showByMonths ? (
        <Fragment>
          <div className="d-flex flex-column post-container div-post ">
            <div className="d-flex justify-content-between">
              <Link to="/new-post">
                <button className="new-post">NEW POST</button>
              </Link>
              <div>
                <img
                  onClick={onChangeShowByMonths}
                  src={CalendarIco}
                  height="40"
                  alt="calendar ico"
                  style={styleIcoBlock}
                />
                <img src={Block} alt="block ico"></img>
              </div>
            </div>
            <Posts />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {/* <div className="d-flex "> */}
          <div className="d-flex flex-column calendar-div">
            <div className="d-flex div-post justify-content-between">
              <Link to="/new-post">
                <button className="new-post">NEW POST</button>
              </Link>
              <div>
                <img
                  style={{ marginRight: 10 }}
                  src={CalendarIco}
                  height="40"
                  alt="calendar ico"
                />
                <img
                  style={styleIcoBlock}
                  onClick={onChangeShowByMonths}
                  src={Block}
                  alt="block ico"
                />
              </div>
            </div>
            <div className=" d-flex justify-content-around ">
              {weekdaysShort.map((value, item) => {
                return (
                  <div className="div-wekks" key={item}>
                    {value.substr(0, 1)}
                  </div>
                );
              })}
            </div>
            <div>
              <div className="d-flex flex-wrap text-white justify-content-center">
                {calendarShow.map((value, index) => {
                  if (value < 10) {
                    return (
                      <div
                        className="text-white div-days d-flex justify-content-center align-items-center"
                        key={index}
                      >
                        {`0${value}`}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="text-white div-days d-flex justify-content-center align-items-center"
                        key={index}
                      >
                        {value}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          {/**************************** STATUS POST ******************************888888********8 */}

          <div className="status-post">
            <h2 className="text-white">STATUS POST</h2>

            <div className="d-flex ">
              <div className="ico-general ico-color-1 d-flex justify-content-center align-items-center ">
                <img src={All} alt="all ico" />
              </div>

              <div className="ico-general border-ico d-flex justify-content-center align-items-center ">
                <img src={Create} alt="create ico" />
              </div>

              <div className="ico-general border-ico d-flex justify-content-center align-items-center">
                <img src={Pause} alt="pause ico" />
              </div>

              <div className="ico-general border-ico d-flex justify-content-center align-items-center ">
                <img src={Play} alt="play ico" />
              </div>
            </div>

            <div className="d-flex">
              <div className="ico-general ico-color-3 d-flex justify-content-center align-items-center">
                <img src={Create} alt="all ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />
            <div className="d-flex">
              <div className="ico-general ico-color-2 d-flex justify-content-center align-items-center">
                <img src={Pause} alt="pause ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />
            <div className="d-flex">
              <div className="ico-general ico-color-1 d-flex force-width justify-content-center align-items-center">
                <img src={Play} alt="pause ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>
            <hr />

            <div className="d-flex">
              <div className="ico-general ico-color-3 d-flex justify-content-center align-items-center">
                <img src={Create} alt="all ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />
            <div className="d-flex">
              <div className="ico-general ico-color-2 d-flex justify-content-center align-items-center">
                <img src={Pause} alt="pause ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />
            <div className="d-flex">
              <div className="ico-general ico-color-1 force-width force-width d-flex justify-content-center align-items-center">
                <img src={Play} alt="pause ico" />
              </div>
              <div className="text-white">
                28 29 30 31
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />

            <div className="d-flex">
              <div className="ico-general ico-color-3   d-flex justify-content-center align-items-center">
                <img src={Create} alt="all ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />
            <div className="d-flex">
              <div className="ico-general ico-color-2 d-flex justify-content-center align-items-center">
                <img src={Pause} alt="pause ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />
            <div className="d-flex">
              <div className="ico-general ico-color-1 force-width d-flex justify-content-center align-items-center">
                <img src={Play} alt="pause ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />
            <div className="d-flex">
              <div className=" ico-general ico-color-3 d-flex justify-content-center align-items-center">
                <img src={Create} alt="all ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />
            <div className="d-flex">
              <div className="ico-general ico-color-2 d-flex justify-content-center align-items-center">
                <img src={Pause} alt="pause ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>

            <hr />
            <div className="d-flex">
              <div className="ico-general ico-color-1 force-width d-flex justify-content-center align-items-center">
                <img src={Play} alt="pause ico" />
              </div>
              <div className="text-white">
                <span>Aug08/2019</span>
                <br />
                <img src={Facebook} alt="facebook ico" />
                <img src={Twitter} alt="twitter ico" />
              </div>
              <p className="text-white">
                lectus quis malesuada malesuada, nisi est congue ligula, sed
                aliquet lectus sapien eu quam.
              </p>
            </div>
          </div>
          {/* *********** STATUS POST ***************************** */}
          {/* </div> */}
        </Fragment>
      )}
    </div>
  );
};

export { Calendar };
