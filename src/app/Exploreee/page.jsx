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
import finalftr from "../../assets/footer.png";

function Melo() {
  return (
    <>
      <div className="home-main">
        <div className="logo">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="header-links">
          <a href="/Homepage">Home</a>
          <a href="/Explore">Artworks</a>

          <a href="">Browse</a>
          <a href="">Shop</a>
          <a href="">Search</a>
          <FaSearch />
          <i className="fa-light fa-magnifying-glass"></i>
        </div>
        <div className="wallet-btn">
          <button>
            {" "}
            <Link href="/Welcome"> Connect Wallet</Link>
          </button>
        </div>
      </div>
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
        <Image id="ftr-end" src={finalftr} alt="Logo" />
      </div>
    </>
  );
}

export default Melo;
