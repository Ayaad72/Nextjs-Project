import React from "react";
import "../CreativeEconomy/Creative.css";
import Image from "next/image";
import economy from "../../assets/economy.png";
import counts from "../../assets/Counts.png";
import fb from "../../assets/fb.png";
import linkdin from "../../assets/linkdin.png";
import path from "../../assets/path.png";
import utube from "../../assets/utube.png";
import insta from "../../assets/insta.png";
// import Footer from "../Footer/page";
// import {SlSocialFacebook } from "reat-icons/sl";
// import { SlSocialLinkedin } from "react-icons/sl";
// import { FiTwitter } from "react-icons/fi";
// import { FiYoutube } from "react-icons/fi";
// import { BsInstagram } from "react-icons/bs";

function Creative() {
  return (
    <>
      <div className="loadmore">
        <button>LOAD MORE</button>
      </div>

      <div className="economy">
        <div className="economy-prt1">
          <Image id="economy" src={economy} alt="Logo" />
        </div>
        <div className="economy-prt2">
          <h1>
            THIS IS THE <br />
            NEW CREATIVE <br />
            ECONOMY
          </h1>
          <p>
            WE’RE BRINGING DIGITAL CREATORS, CRYPTO <br /> NATIVES, AND
            COLLECTORS TOGETHER TO <br /> MOVE CULTURE FORWARD.
          </p>
          <button id="load-btn">Become a creator</button>
        </div>
      </div>
      <div className="ftr-snd">
        <div className="count-matter">
          <h2>Some count that matters</h2>
          <p>Our achievement in the journey depicted in numbers</p>
        </div>
        <div className="ftr-nums">
          <div className="ftr-nums1">
            <p>50000</p>
            <p id="pftr-1">Products</p>
          </div>
          <div className="ftr-nums1">
            <p>31000</p>
            <p id="pftr-1">Creators</p>
          </div>
          <div className="ftr-nums1">
            <p>50000</p>
            <p id="pftr-1">Buy/Sell</p>
          </div>
          <div className="ftr-nums1">
            <p>8</p>
            <p id="pftr-1">Years of Journey</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creative;
