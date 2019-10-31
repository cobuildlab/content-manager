import React, { useState } from "react";
import DashborNav from "../../components/dashboardNav";
import SocialBar from "../../components/socialBar";
import InstagramIco from "../../assets/ico/Instagram.svg";
import FacebookIco from "../../assets/ico/facebook.svg";
import PostDashboard from "./components/PostDashboard";
import MentionsDashboard from "./components/MentionsDashboard";

import "./dashboard.css";

const Dashboard = () => {
  const [post, setPost] = useState(true);

  const onChangePost = () => {
    setPost(true);
  };
  const onChangeMentions = () => {
    setPost(false);
  };

  return (
    <div className="d-flex dashboard-container ">
      <DashborNav />
      <div className="div-post d-flex flex-column align-items-center">
        <SocialBar ico={InstagramIco} alt={"instagram ico"} />
        <div className=" div-button text-dashboard d-flex justify-content-between ">
          <div className="post-button text-center" onClick={onChangePost}>
            Post
          </div>
          <div
            className="mentions-button text-center"
            onClick={onChangeMentions}
          >
            Mentions
          </div>
        </div>
        {post ? <PostDashboard /> : <MentionsDashboard />}
      </div>
      <div className="div-post d-flex flex-column align-items-center">
        <SocialBar ico={FacebookIco} alt={"facebook ico"} />
        <div className=" div-button text-dashboard d-flex justify-content-between ">
          <div className="post-button text-center" onClick={onChangePost}>
            Post
          </div>
          <div
            className="mentions-button text-center"
            onClick={onChangeMentions}
          >
            Mentions
          </div>
        </div>
        {post ? <PostDashboard /> : <MentionsDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
