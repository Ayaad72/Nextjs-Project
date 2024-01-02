import React from "react";
import Image from "next/image";
import logo from "../../assets/Group 8.png";
import girl from "../../assets/comp-img.png";
import currentBid from "../../assets/currentBid.png";
// import AW2 from "../../assets/AW2.png";
import threePics from "../../assets/threeePics.png";
import creatorName from "../../assets/CreatorName.png";
import { FaSearch } from "react-icons/fa";
import "../mint/mint.css";

function Mint() {
  return (
    <>
      <div className="home-main">
        <div className="logo">
          <Image className="girl" src={logo} alt="Logo" />
        </div>
        <div className="header-links">
          <a href="/Homepage">Home</a>
          <a href="">Artworks</a>
          <a href="">Browse</a>
          <a href="">Shop</a>
          <a href="">Search</a>
          <FaSearch />
          <i className="fa-light fa-magnifying-glass"></i>
        </div>
        <div className="wallet-btn">
          <button>Connect Wallet</button>
        </div>
      </div>

      {/* section-main */}
      <section className="rectangle-91">
        <div className="rectangle-prt1">
          <Image id="grl-img" src={girl} alt="" />
        </div>
      </section>
      <br />
      <br />
      {/* artwork name */}
      <div className="ARTWORKCREATORNAME">
        <div className="ARTWORKCREATORNAME1">
          <p>ARTWORK CREATOR NAME</p>
          <h2>ARTWORK NAME</h2>
          <p className="artInfo">↓ ARTWORK INFORMATION</p>
          <h2>DESCRIPTION</h2>
          <p>
            A SHORT SERIES EXPLORING THE UNEXPECTANCY OF LIGHT <br />
            DISPERSIION WITHIN OBJECTS
          </p>
          <br />
          <p>
            In optics, dispersion is the phenomenon in which the <br /> phase
            velocity of a wave depends on its frequency. <br /> Sometimes the
            term chromatic dispersion is used for <br /> specificity. Although
            the term is used in the field of <br /> optics to describe light and
            other electromagnetic <br /> waves, dispersion in the same sense can
            apply to <br /> any sort of wave motion
          </p>
          <br />
          <p>part of the collection dispersion, by hadiedaaf</p>
          <br />
          <p>1080x1080</p>
          <br />
          <p>
            Edition of <br /> 1
          </p>
        </div>
        <div className="ARTWORKCREATORNAME2">
          <div id="currentBid">
            <Image id="sourceImage" src={currentBid} alt="currentBid"></Image>
          </div>
          <div className="buttonzz">
            {" "}
            <button id="buyButton">BUY</button>
            <button id="placeAbid">Place a bid</button>
            <Image id="threeepics" src={threePics} alt="threePics" />
          </div>
          {/* <Image id='Aw2' src={AW2} alt='rectangle'></Image> */}
          <Image id="creatorName" src={creatorName} alt="juu"></Image>
        </div>
      </div>
    </>
  );
}

export default Mint;
