import React from "react";
import Home from "../assets/ico/home.svg";
import Calendar from "../assets/ico/calendar.svg";
import Stast from "../assets/ico/Stats.svg";
import Video from "../assets/ico/video.svg";
import Settings from "../assets/ico/Settings.svg";
import Logout from "../assets/ico/log-out.svg";
import { Link } from "react-router-dom";

const DashborNav = () => {
  return (
    <div className="d-flex flex-column text-center align-items-center dashboard-nav">
      <Link to="/dashboard">
        <img src={Home} alt="home icon" />
      </Link>
      <Link to="/calendar">
        <img src={Calendar} alt="calender icon"></img>
      </Link>
      <Link>
        <img src={Stast} alt="stast icon" />
      </Link>
      <Link>
        <img src={Video} alt="video icon" />
      </Link>
      <Link>
        <img src={Settings} alt="settings icon" />
      </Link>
      <li className="logout-icon">
        <img src={Logout} alt="logout ico" />
      </li>
    </div>
  );
};

export default DashborNav;
