import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/Group 8.png";
import Image from "next/image";
// import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  return (
    <div className="home-main">
      <div className="logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="header-links">
        <a href="">Home</a>
        <Link href="/Exploreee">Artworks</Link>

        <Link href="">Browse</Link>
        <a href="">Shop</a>
        <a href="">Search</a>
        <FaSearch />
        <i className="fa-light fa-magnifying-glass"></i>
      </div>
      <div className="wallet-btn">
        <button>
          {" "}
          <Link href="/Popup"> Connect Wallet</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
