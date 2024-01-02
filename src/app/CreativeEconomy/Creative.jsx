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
          {/* Add width and height properties */}
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

      <div className="final-ftr">
        <div className="ftrprt1">
          <div className="prt1-icons">
            <Image src={fb} alt="Logo" />
            <Image src={linkdin} alt="Logo" />
            <Image src={path} alt="Logo" />
            <Image src={utube} alt="Logo" />
            <Image src={insta} alt="Logo" />
            {/* <SlSocialFacebook />
            <SlSocialLinkedin />
            <FiTwitter />
            <FiYoutube />
            <BsInstagram /> */}
          </div>
          <div className="prt2-icons">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </div>
        <hr id="hr-ftr" />
        <div className="ftrprt2">
          <div className="final-text">
            <p>©2020 NFT STORE Oo</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creative;
