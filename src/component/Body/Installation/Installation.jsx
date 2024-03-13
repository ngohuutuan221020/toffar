import "./Installation.scss";
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
      name: "1. Vận chuyển các cấu kiện thép bằng xe tải chuyên dụng đến vị trí tập kết tại công trình",
      image: img1,
    },
    {
      name: "2. Lắp dựng cột",
      image: img2,
    },
    {
      name: "3. Lắp dựng vách và giằng các cột lại với nhau",
      image: img3,
    },
    {
      name: "4. Lắp dựng khung kèo mái",
      image: img4,
    },
  ];
  return (
    <>
      <section className="Installation" id="Installation">
        <h1 className="heading">Quy trình lắp dựng</h1>
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
