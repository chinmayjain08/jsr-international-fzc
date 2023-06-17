import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import video from "../../constants/video/video.mp4";
import "./Intro.css";
import Navbar from "../Navbar/Navbar";
import Strengths from "../Strengths/Strengths";
import Core from "../CoreValues/Core";
import Carousal from "../Carousal/Carousal";

const Intro = () => {
  //   const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <>
      <div className="app__video" id="home">
        <video ref={vidRef} src={video} type="video/mp4" loop autoPlay muted />
        <div className="app__video-overlay flex__center">
          <div className="content">
            <Navbar  />
            <div className="text">
              <h1>Welcome to JSR</h1>
              JSR is a global supplier, distributor and trader of recyclable,
              prime and non-prime raw materials. We deal in variety of products
              including Steel, Metal, Paper and Plastic.
            </div>
          </div>
        </div>
      </div>
      <Strengths></Strengths>
      <Core></Core>
      <Carousal></Carousal>
    </>
  );
};

export default Intro;
