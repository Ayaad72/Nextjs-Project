import React from "react";
import "../ArtComponents/Artcomponent.css";
import Image from "next/image";
import yuweko from "../../assets/yuweko.png";

function Artcomponent() {
  return (
    <>
      <div className="Artwork-component">
        <div className="Art-img1">
          <div className="Arts">
            <Image id="yuweko1" src={yuweko} alt="Logo" />
            <p>Product name</p>
            <p>Creator name</p>
            <div className="span-p">
              <span id="spn-1">
                <p>Current Bid</p>
                <p>End In</p>
              </span>
              <span id="spn-2">
                <p>1.7335 ETH</p>
                <p>2days 54m 07s</p>
              </span>
            </div>
          </div>
        </div>

        <div className="Art-img2">
          <div className="Arts">
            <Image id="yuweko2" src={yuweko} alt="Logo" />
            <p>Product name</p>
            <p>Creator name</p>
            <div className="span-p">
              <span id="spn-1">
                <p>Current Bid</p>
                <p>End In</p>
              </span>
              <span id="spn-2">
                <p>1.7335 ETH</p>
                <p>2days 54m 07s</p>
              </span>
            </div>
          </div>
        </div>
        <div className="Art-img3">
          <div className="Arts">
            <Image id="yuweko3" src={yuweko} alt="Logo" />
            <p>Product name</p>
            <p>Creator name</p>
            <div className="span-p">
              <span id="spn-1">
                <p>Current Bid</p>
                <p>End In</p>
              </span>
              <span id="spn-2">
                <p>1.7335 ETH</p>
                <p>2days 54m 07s</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Artcomponent;
