import React, { useState } from "react";
import DashborNav from "../../components/dashboardNav";
import MediaBar from "../../components/mediabar";
import TextIco from "../../assets/ico/text.svg";
import PictureIco from "../../assets/ico/picture.svg";
import VideoIco from "../../assets/ico/video.svg";
import GifIco from "../../assets/ico/gif.svg";
import FacebookIco from "../../assets/ico/facebook.svg";
import TwitterIco from "../../assets/ico/twitter.svg";
import InstagramIco from "../../assets/ico/Instagram.svg";
import LinkedinIco from "../../assets/ico/linkedin.svg";
import FaceIco from "../../assets/ico/face.svg";
import DisplayBar from "../../components/displayBar";
import MovilIco from "../../assets/ico/movil.svg";
import DesktopIco from "../../assets/ico/desktop.svg";
import "./post.css";

const PostNote = () => {
  const [display, setDisplay] = useState([
    {
      name: "Post-Note",
      active: true
    },
    {
      name: "Preview",
      active: false
    }
  ]);
  const [typePost, setTypePost] = useState([
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
  ]);

  const [socialNetwork, setSocialNetWork] = useState([
    {
      ico: FacebookIco,
      alt: "facebook ico",
      active: false
    },
    {
      ico: TwitterIco,
      alt: "twitter ico",
      active: false
    },
    {
      ico: InstagramIco,
      alt: "instagram ico",
      active: true
    },
    {
      ico: LinkedinIco,
      alt: "linkedinIco ico",
      active: false
    }
  ]);

  const onChangetypePost = indexButton => {
    const typePostMute = typePost.map((value, index) => {
      if (index === indexButton) {
        return { ...value, active: true };
      } else {
        return { ...value, active: false };
      }
    });
    setTypePost(typePostMute);
  };

  const onChangeSocialNetwork = indexButton => {
    const socialNetworkMute = socialNetwork.map((value, index) => {
      if (index === indexButton) {
        return { ...value, active: true };
      } else {
        return { ...value, active: false };
      }
    });

    setSocialNetWork(socialNetworkMute);
  };

  const onDisplayChange = indexButton => {
    const displayMute = display.map((value, index) => {
      if (index === indexButton) {
        return { ...value, active: true };
      } else {
        return { ...value, active: false };
      }
    });
    setDisplay(displayMute);
  };

  if (display[1].active) {
    return (
      <div className="dashboard-container d-flex">
        <DashborNav />
        <div className="d-flex flex-column container-newPost">
          <div className="div-newPost">
            <h2>Post 29/09/2019</h2>
          </div>
          <div
            style={{ marginTop: 20 }}
            className="d-flex justify-content-center"
          >
            <DisplayBar change={onDisplayChange} data={display} />
          </div>
          <div className="d-flex justify-content-center">
            <div className="post-note-preview">
              <h3 className="color-fontPost title-post"></h3>
              <div className="d-flex justify-content-center justify-content-around ">
                <div className="preview-desktop "></div>
                <div className="preview-movil"></div>
              </div>
              <div className="preview-bar d-flex justify-content-around  align-items-center">
                <img src={DesktopIco} alt="desktop ico" />
                <img src={MovilIco} alt="movil ico" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container d-flex">
      <DashborNav />
      <div className="d-flex flex-column container-newPost">
        <div className="div-newPost">
          <h2>Post 29/09/2019</h2>
        </div>
        <div
          style={{ marginTop: 20 }}
          className="d-flex justify-content-center"
        >
          <DisplayBar change={onDisplayChange} data={display} />
        </div>
        <div className="div-information d-flex flex-wrap  ">
          <div className="div-typePost">
            <h3 className="title-post color-fontPost">Type of post</h3>

            <div className="d-flex flex-wrap">
              <MediaBar change={onChangetypePost} data={typePost} />
            </div>

            <h3 className="title-post color-fontPost">Social Network</h3>

            <div className="d-flex flex-wrap">
              <MediaBar change={onChangeSocialNetwork} data={socialNetwork} />
            </div>
            <div>
              <h3 className="title-post color-fontPost">Content</h3>

              <form className="d-flex flex-column flex-wrap">
                <div className="div-textarea">
                  <label className="color-fontPost ">
                    <textarea className="textarea-newpost"></textarea>
                  </label>
                  <img src={TextIco} alt="text ico " />
                  <img src={FaceIco} alt="face ico " />
                </div>

                <div className="d-flex justify-content-around ">
                  <label className="d-flex flex-column color-fontPost">
                    Date
                    <input type="date" name="date" className="input-newpost" />
                  </label>

                  <label className="d-flex flex-column color-fontPost">
                    Time
                    <input type="time" name="time" className="input-newpost" />
                  </label>
                </div>

                <button className="button-post color-fontPost">
                  Save Comentary
                </button>
              </form>
            </div>
          </div>
          <div className="div-preview ">
            <h3 className="color-fontPost title-post">Note</h3>
            <div className="div-textarea">
              <label className="color-fontPost ">
                Comentary
                <textarea className="textarea-newpost"></textarea>
              </label>
              <img src={TextIco} alt="text ico " />
              <img src={FaceIco} alt="face ico " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PostNote };
