// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function ProductsSlider() {
  return (
    <div style={{ marginTop: "65px" }}>
      <h3>
        <span style={{ color: "var(--primary-color)" }}>High Quality</span>{" "}
        Products
      </h3>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={55}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductsSlider;
