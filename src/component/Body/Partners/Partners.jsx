import "./Partners.scss";
import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import {FreeMode} from "swiper/modules";

import img1 from "../../../assets/Partners/amata.jpg";
import img2 from "../../../assets/Partners/vietdam.jpg";
import img3 from "../../../assets/Partners/pomina.jpg";
import img4 from "../../../assets/Partners/vina.png";
import img5 from "../../../assets/Partners/tungho.jpg";
import img6 from "../../../assets/Partners/yamato.png";
import img7 from "../../../assets/Partners/Nippon-Steel.jpg";
import img8 from "../../../assets/Partners/HP.png";
import img9 from "../../../assets/Partners/liic.png";
import img10 from "../../../assets/Partners/Coteccons.png";
import img11 from "../../../assets/Partners/unicons.jpg";
import img12 from "../../../assets/Partners/Xinvest.png";
import img13 from "../../../assets/Partners/bluescope.jpg";
import img14 from "../../../assets/Partners/nidec.png";
import img15 from "../../../assets/Partners/PhutaiLogo.png";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
function Partners() {
  let arrPartners = [
    {image: img10},
    {image: img11},
    {image: img12},
    {image: img13},
    {image: img14},
    {image: img15},
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4},
    {image: img5},
    {image: img6},
    {image: img7},
    {image: img8},
    {image: img9},
  ];
  return (
    <>
      <section className="partners" id="partners">
        <h1 className="heading">Đối tác và khách hàng</h1>
        <Swiper slidesPerView={4} freeMode={true} spaceBetween={30} modules={[FreeMode]} className="mySwiper">
          {arrPartners &&
            arrPartners.length > 0 &&
            arrPartners.map((item, index) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="image">
                      <img src={item.image} alt="" />
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
        </Swiper>
      </section>
    </>
  );
}

export default Partners;
