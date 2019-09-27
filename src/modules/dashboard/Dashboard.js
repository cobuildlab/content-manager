import React, { Component } from "react";
import DashborNav from "../../components/dashboardNav";
import SocialBar from "../../components/socialBar";
import InstagramIco from "../../assets/ico/Instagram.svg";
import PostDashboard from "./components/PostDashboard";
import MentionsDashboard from "./components/MentionsDashboard";

import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: true,
      mentions: false
    };
  }

  onchangePost = () => {
    this.setState({ post: false });
  };
  onchangeMentions = () => {
    this.setState({ post: true });
  };
  render() {
    const { post } = this.state;
    console.log(post);
    return (
      <div className="d-flex dashboard-container">
        <DashborNav />
        <div className=" d-flex flex-column align-items-center">
          <SocialBar ico={InstagramIco} alt={"instagram ico"} />
          <div className="text-dashboard d-flex justify-content-between ">
            <div onClick={this.onchangeMentions}>Post</div>
            <div onClick={this.onchangePost}>Mentions</div>
          </div>
          {post ? <PostDashboard /> : <MentionsDashboard />}
        </div>
      </div>
    );
  }
}

export default Dashboard;
