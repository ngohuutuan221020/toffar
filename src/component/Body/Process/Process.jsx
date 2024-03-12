import "./Process.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Scrollbar, Navigation, Pagination, A11y, EffectFade, FreeMode} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import img1 from "../../../assets/Process/nguyenlieu.png";
import img2 from "../../../assets/Process/cat-laser-thep.jpg";
import img3 from "../../../assets/Process/epdinhhinh.jpg";
import img4 from "../../../assets/Process/raphoanthien.jpg";
import img5 from "../../../assets/Process/nanchinh.jpg";
import img6 from "../../../assets/Process/hanhoanthien.jpg";
import img7 from "../../../assets/Process/lamsach.jpg";
import img8 from "../../../assets/Process/phunson.jpg";
import img9 from "../../../assets/Process/kiemtra.jpg";

import num1 from "../../../assets/Number/number-1.png";
import num2 from "../../../assets/Number/number-2.png";
import num3 from "../../../assets/Number/number-3.png";
import num4 from "../../../assets/Number/number-4.png";
import num5 from "../../../assets/Number/number-5.png";
import num6 from "../../../assets/Number/number-6.png";
import num7 from "../../../assets/Number/number-7.png";
import num8 from "../../../assets/Number/number-8.png";
import num9 from "../../../assets/Number/number-9.png";
function Process() {
  let arrProducts = [
    {
      name: "Nguyên liệu",
      img: img1,
      num: num1,
    },
    {
      name: "Cắt thép",
      img: img2,
      num: num2,
    },
    {
      name: "Ép định hình cầu kiện",
      img: img3,
      num: num3,
    },
    {
      name: "Ráp hoàn thiện",
      img: img4,
      num: num4,
    },
    {
      name: "Nấn chỉnh",
      img: img5,
      num: num5,
    },
    {
      name: "Hàn hoàn thiện",
      img: img6,
      num: num6,
    },
    {
      name: "Làm sạch",
      img: img7,
      num: num7,
    },
    {
      name: "Phun sơn",
      img: img8,
      num: num8,
    },
    {
      name: "Kiểm tra thành phẩm",
      img: img9,
      num: num9,
    },
  ];
  return (
    <>
      <section className="Process" id="Process">
        <h1 className="heading">Quy trình sản xuất</h1>
        <div className="process-slider">
          <div className="w">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                375: {
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
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {arrProducts &&
                arrProducts.length > 0 &&
                arrProducts.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide>
                        <div className="slide">
                          <div className="image">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content">
                            <img src={item.num} alt="" />
                            <h3>{item.name}</h3>
                          </div>
                        </div>
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

export default Process;
