import "./Home.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, A11y, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-slider">
          <div className="w">
            <Swiper
              slidesPerView={1}
              modules={[Navigation, Pagination, A11y, EffectFade]}
              navigation
              loop={true}
              pagination={{clickable: true}}
              effect={"fade"}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <section className="slide slide-2">
                  <div className="content">
                    <h3 style={{letterSpacing: "2.5rem", WebkitTextStroke: ".3rem #54658f"}}>TOFFAR</h3>
                    <p>TOFFAR STEEL FACILITIES</p>
                    {/* <a href="#about" className="btn btn-secondary">
                      Get Started
                    </a> */}
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="slide slide-1">
                  <div className="content">
                    <h3> </h3>
                    <p></p>
                    {/* <a href="#about" className="btn btn-secondary">
                      Get Started
                    </a> */}
                  </div>
                </section>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
