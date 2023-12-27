import React from "react";
import Homepage from "./Homepage/page.jsx";
import Artwork from "./Artwork/Artwork.jsx";
import Artcomponent from "./ArtComponents/Artcomponent.jsx";
import Art2 from "./Artsecond/Art2.jsx";
import Art3 from "./Artthird/Art3.jsx";
import Creative from "./CreativeEconomy/Creative.jsx";

export default function Home() {
  return (
    <>
      <Homepage />
      <Artwork />
      <Artcomponent />
      <Art2 />
      <Art3 />
      <Creative />
      {/* <Welcome /> */}
    </>
  );
}
