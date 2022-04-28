import React from "react";
import "./VideoComponent.scss";
import background_video from "../../assets/shaving.mp4";

const VideoComponent = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <video id="background-video" loop muted controls>
              <source src={background_video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
