import React from "react";
import "../Footer/Footer.css";
import Image from "next/image";
import fb from "../../assets/fb.png";
import linkdin from "../../assets/linkdin.png";
import path from "../../assets/path.png";
import utube from "../../assets/utube.png";
import insta from "../../assets/insta.png";
function Footer() {
  return (
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
  );
}

export default Footer;
