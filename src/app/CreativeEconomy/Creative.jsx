import React from "react";
import "../CreativeEconomy/Creative.css";
import Image from "next/image";
import economy from "../../assets/economy.png";
import counts from "../../assets/Counts.png";
import finalftr from "../../assets/footer.png";

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
          <Image src={counts} alt="Logo" />
        </div>
      </div>

      <div className="final-ftr">
        <Image id="ftr-end" src={finalftr} alt="Logo" />
      </div>
    </>
  );
}

export default Creative;
