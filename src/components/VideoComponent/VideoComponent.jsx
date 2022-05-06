import React from "react";
import "./VideoComponent.scss";
import background_video from "../../assets/shaving.mp4";

const VideoComponent = () => {
  return (
    <section>
      <div className="container-fluid padding-0">
        <div className="row g-0">
          <div className="col-12 justify-content-center padding-0 video-container">
            <video id="background-video" muted controls>
              <source src={background_video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
