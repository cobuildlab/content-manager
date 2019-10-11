import React from "react";
import DashborNav from "../../../components/dashboardNav";
import MediaBar from "../../../components/mediabar";
import TextIco from "../../../assets/ico/text.svg";
import PictureIco from "../../../assets/ico/picture.svg";
import VideoIco from "../../../assets/ico/video.svg";
import GifIco from "../../../assets/ico/gif.svg";
import FacebookIco from "../../../assets/ico/facebook.svg";
import TwitterIco from "../../../assets/ico/twitter.svg";
import InstagramIco from "../../../assets/ico/Instagram.svg";
import LinkedinIco from "../../../assets/ico/linkedin.svg";
import MovilIco from "../../../assets/ico/movil.svg";
import DesktopIco from "../../../assets/ico/desktop.svg";
import FaceIco from "../../../assets/ico/face.svg";

const Post = () => {
  return (
    <div className="dashboard-container">
      <DashborNav />
      {/* <div className="d-flex flex-column  container-newPost">
        <div className="div-newPost">
          <h2>New Post</h2>
        </div>
        <div className="div-information d-flex flex-wrap  ">
          <div className="div-typePost">
            <h3 className="title-post color-fontPost">Type of post</h3>

            <div className="d-flex flex-wrap">
              <MediaBar change={this.onChangetypePost} data={typePost} />
            </div>

            <h3 className="title-post color-fontPost">Social Network</h3>

            <div className="d-flex flex-wrap">
              <MediaBar
                change={this.onChangeSocialNetwork}
                data={socialNetwork}
              />
            </div>
            <div>
              <h3 className="title-post color-fontPost">Content</h3>

              <form className="d-flex flex-column flex-wrap">
                <div className="div-textarea">
                  <label className="color-fontPost ">
                    <textarea></textarea>
                  </label>
                  <img src={TextIco} alt="text ico " />
                  <img src={FaceIco} alt="face ico " />
                </div>

                <div className="d-flex justify-content-around ">
                  <label className="d-flex flex-column color-fontPost">
                    Date
                    <input type="date" name="date" />
                  </label>

                  <label className="d-flex flex-column color-fontPost">
                    Time
                    <input type="time" name="time" />
                  </label>
                </div>

                <button className="button-post color-fontPost">
                  Save to calendar
                </button>
              </form>
            </div>
          </div>
          <div className="div-preview ">
            <h3 className="color-fontPost title-post">Preview</h3>
            <div className="d-flex justify-content-center align-items-center">
              <div className="preview-Info"></div>
            </div>
            <div className="preview-bar d-flex justify-content-center align-items-center">
              <img src={DesktopIco} alt="desktop ico" />
              <img src={MovilIco} alt="movil ico" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export { Post };
