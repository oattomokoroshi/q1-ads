import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AthletsArticle1,
  AthletsArticle2,
  AthletsArticle3,
  PlayerArticle1,
  PlayerArticle2,
  PlayerArticle3,
} from "./shared";

import BasketBallMobile from '../images/basketballer_mobile.png';
import FootBallMobile from '../images/footballer_mobile.png';

const MobileSize = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (index) => {
      return (
        <div
          id="pagingDot"
          style={{
            borderRadius: '50%',
            width: '10px',
            height: '10px',
            backgroundColor: '#d8d8d8',
          }}
        />
      );
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Football Player */}
      <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '50px', lineHeight: '59px', paddingLeft: '19px',color: '#E7E7E7' }}>
          ATHLETS
        </span>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '11px' }}>
          <img
            src={FootBallMobile}
            style={{ width: '218px', minWidth: '218px' }}
          />
        </div>
      </div>
      <div style={{ marginTop: '-55px', paddingTop: '72px', paddingBottom: '69px', backgroundColor: '#F5F4F9' }}>
        <Slider {...settings}>
          <AthletsArticle1 styleComponent={{ paddingLeft: '19px' }} />
          <AthletsArticle2 styleComponent={{ paddingLeft: '19px' }} />
          <AthletsArticle3 styleComponent={{ paddingLeft: '19px' }} />
        </Slider>
      </div>

      {/* Basketball Player */}
      <div style={{ height: '346px', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '50px', lineHeight: '59px', paddingLeft: '17px', marginTop: '19px',color: '#E7E7E7' }}>
          PLAYERS
        </span>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '23px', marginLeft: '3px' }}>
          <img
            src={BasketBallMobile}
            style={{ width: '302px', minWidth: '302px' }}
          />
        </div>
      </div>

      <div style={{ marginTop: '-33px', paddingTop: '72px', paddingBottom: '77px', backgroundColor: '#F5F4F9' }}>
        <Slider {...settings}>
          <PlayerArticle1 styleComponent={{ paddingLeft: '19px', paddingRight: '18px' }} />
          <PlayerArticle2 styleComponent={{ paddingLeft: '19px', paddingRight: '18px' }} />
          <PlayerArticle3 styleComponent={{ paddingLeft: '19px', paddingRight: '18px' }} />
        </Slider>
      </div>
    </div>
  );
};

export default MobileSize;
