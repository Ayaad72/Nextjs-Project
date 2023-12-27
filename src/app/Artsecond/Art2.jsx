import React from "react";
import "../ArtComponents/Artcomponent.css";
import Image from "next/image";
import comp2 from "../../assets/Group 3.png";

function Artcomponent() {
  return (
    <>
      <div className="Artwork-component">
        <div className="Art-img1">
          <Image id="img1" src={comp2} alt="Logo" />
        </div>

        <div className="Art-img2">
          <Image id="img2" src={comp2} alt="Logo" />
        </div>
        <div className="Art-img3">
          <Image id="img3" src={comp2} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default Artcomponent;