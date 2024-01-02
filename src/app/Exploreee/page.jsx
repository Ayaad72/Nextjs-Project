import React from "react";
import "./Explore.css";
import expTitle from "../../assets/btn.png";
import Image from "next/image";
import logo from "../../assets/Group 8.png";
import filtr from "../../assets/Screenshot (62).png";
import { FaSearch } from "react-icons/fa";
import Artcomponent from "../ArtComponents/Artcomponent.jsx";
import Art2 from "../Artsecond/Art2.jsx";
import Art3 from "../Artthird/Art3.jsx";
import Link from "next/link";
import fb from "../../assets/fb.png";
import linkdin from "../../assets/linkdin.png";
import path from "../../assets/path.png";
import utube from "../../assets/utube.png";
import insta from "../../assets/insta.png";
import Navbar from "../Navbar/page";

function Melo() {
  return (
    <>
      <Navbar />
      <hr id="hr" />

      <section className="explore-main">
        <div className="explore-main1">
          <Image src={expTitle} alt="Logo" />
        </div>
        <div className="explore-main2">
          <button>All</button>
          <button>Art</button>
          <button>Photography</button>
          <button>Games</button>
          <button>Music</button>
          <button>Domains</button>
          <button>Memes</button>
          <Image src={filtr} alt="Logo" />
        </div>
      </section>

      <Artcomponent />
      <Art2 />
      <Art3 />
      <Art3 />
      <Art3 />
      <Art3 />

      {/* ending section continues... */}

      <div className="ending-prt">
        <div className="ending">
          <button>LOAD MORE</button>
        </div>
      </div>
      <div className="final-ftr">
        <div className="ftrprt1">
          <div className="prt1-icons">
            <Image id="icons" src={fb} alt="Logo" />
            <Image id="icons" src={linkdin} alt="Logo" />
            <Image id="icons" src={path} alt="Logo" />
            <Image id="icons" src={utube} alt="Logo" />
            <Image id="icons" src={insta} alt="Logo" />
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

export default Melo;
