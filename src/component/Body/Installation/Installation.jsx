import "./Installation.scss";
import {FormattedMessage} from "react-intl";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, A11y, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../../../assets/Installation/vanchuyen.jpg";
import img2 from "../../../assets/Installation/lapdungcot.png";
import img3 from "../../../assets/Installation/lapdungvach.jpg";
import img4 from "../../../assets/Installation/khungmaicheo.jpg";
function Installation() {
  let arrProducts = [
    {
      name: <FormattedMessage id="install_1" />,
      image: img1,
    },
    {
      name: <FormattedMessage id="install_2" />,
      image: img2,
    },
    {
      name: <FormattedMessage id="install_3" />,
      image: img3,
    },
    {
      name: <FormattedMessage id="install_4" />,
      image: img4,
    },
  ];
  return (
    <>
      <section className="Installation" id="Installation">
        <h1 className="heading">
          <FormattedMessage id="quyTrinhLapDung" />
        </h1>
        <div className="installation-slider">
          <div className="w">
            <Swiper
              slidesPerView={3}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              loop={true}
              centeredSlides={true}
              pagination={true}
              spaceBetween={1}
              modules={[Pagination]}
            >
              {arrProducts &&
                arrProducts.length > 0 &&
                arrProducts.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide className="installation-swiper">
                        <section className="installation-slide">
                          <div className="installation-image">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="installation-content">
                            <h5>{item.name}</h5>
                            <p> </p>
                          </div>
                        </section>
                      </SwiperSlide>
                    </>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Installation;
