import React, {useState,useEffect} from 'react';

import {
  AthletsArticle1,
  AthletsArticle2,
  AthletsArticle3,
  PlayerArticle1,
  PlayerArticle2,
  PlayerArticle3,
} from "./shared";

import FooterBallXL from '../images/footballer_xl.png'
import FooterBallMD from '../images/footballer_md.png'
import BasketBallMD from '../images/basketballer_md.png'
import BasketBallXL from '../images/basketballer_xl.png'


const TabletAndDesktopSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const useMDSize = windowWidth  <= 1280; // Check if the current viewport width is <= 1280px
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Football Line 1 */}
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row" }}>
        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <img
            src={FooterBallXL}
            height="auto"
            style={{
              display: useMDSize ? "none" : "block",
              position:'absolute',
              width: "678px",
              minWidth: "678px",
              top: "35px",
              right: "155px",
            }}
          />
          <img
            src={FooterBallMD}
            height="auto"
            style={{
              display: useMDSize ? "block" : "none",
              position:'absolute',
              width: "334px",
              minWidth: "334px",
              top: "102px",
              left: "0",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingTop: useMDSize ? "81px" : "6px",
            paddingBottom: useMDSize ? "38px" : "28px",
          }}
        >
          <span style={{ fontSize: "90px", lineHeight: "105px",
    color: '#E7E7E7'}}>
            ATHLETS
          </span>
          <AthletsArticle1 styleComponent={{ marginTop: useMDSize ? "34px" : "59px" }} />
        </div>
      </div>

      {/* Football Line 2 */}
      <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#F5F4F9", paddingTop: useMDSize ? "30px" : "53px", paddingBottom: useMDSize ? "30px" : "51px" }}>
        <div style={{ flex: 1 }} />
        <AthletsArticle2 styleComponent={{ flex: 1}} />
      </div>

      {/* Football Line 3 */}
      <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#5E3DB3", paddingTop: useMDSize ? "30px" : "85px", paddingBottom: useMDSize ? "30px" : "98px" }}>
        <div style={{ flex: 1 }} />
        <AthletsArticle3 styleComponent={{ flex: 1}} />
      </div>

      {/* Basketball Line 1 */}
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingTop: useMDSize ? "52px" : "124px", paddingBottom: useMDSize ? "10px" : "69px" }}>
          <div style={{ width: "717px", paddingLeft: "31px" }}>
            <span style={{ display: "block", fontSize: "90px", lineHeight: "105px", color: '#E7E7E7' }}>
              PLAYERS
            </span>
            <PlayerArticle1 styleComponent={{ marginTop: useMDSize ? "34px" : "68px" }} />
          </div>
        </div>
        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <img
            src={BasketBallXL}
            height="auto"
            style={{
              display: useMDSize ? "none" : "block",
              position:'absolute',
              width: "991px",
              minWidth: "991px",
              top: "0",
              left: "-210px",
            }}
          />
          <img
            src={BasketBallMD}
            height="auto"
            style={{
              display: useMDSize ? "block" : "none",
              position:'absolute',
              width: "436px",
              minWidth: "436px",
              top: "33px",
              right: "0",
            }}
          />
        </div>
      </div>

      {/* Basketball Line 2 */}
      <div style={{ backgroundColor: "#F5F4F9", display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingTop: useMDSize ? "51px" : "52px", paddingBottom: useMDSize ? "65px" : "102px" }}>
          <PlayerArticle2 styleComponent={{ width: "717px", paddingLeft: "31px" }} />
        </div>
        <div style={{ flex: 1 }} />
      </div>

      {/* Basketball Line 3 */}
      <div style={{ backgroundColor: "#090C35", display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingTop: useMDSize ? "6px" : "60px", paddingBottom: useMDSize ? "28px" : "70px" }}>
          <PlayerArticle3 styleComponent={{ width: "717px", paddingLeft: "31px" }} />
        </div>
        <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "row", justifyContent: "center" }} />
      </div>
    </div>
  );
};

export default TabletAndDesktopSize;