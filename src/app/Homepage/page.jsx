import React from "react";
import Image from "next/image";

import ethurem from "../../assets/ethurem.png";
import { FaSearch } from "react-icons/fa";
import "../Homepage/Homepage.css";
import Link from "next/link";
// import Welcome from "../Welcome/Welcome";

function Home() {
  return (
    <>
      {/* section main-prt */}

      <section className="main">
        <div className="main-prt1">
          <div className="part1-content">
            <h2>
              THE LARGEST <br /> NFT
            </h2>

            <h1>MARKETPLACE</h1>
            <p>
              The world’s largest digital marketplace for <br /> crypto
              collectibles and non-fungible tokens, <br /> including ERC721 and
              ERC1155 assets. <br /> Buy, sell, and discover exclusive digital
              assets <br /> like Axies, ENS names, CryptoKitties, <br />{" "}
              Decentraland, and more.
            </p>
          </div>

          <div className="main-btn">
            <button id="main-1">Explore</button>
            <button id="main-2">CREATE</button>
          </div>
        </div>
        <div className="main-prt2">
          <div className="img-setting">
            <Image src={ethurem} alt="Logo" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
