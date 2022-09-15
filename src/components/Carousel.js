import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/carousel.module.scss";

const Carousel = ({ content, slidesPerView }) => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation, Autoplay]}
        className="myCarousel"
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        spaceBetween={5}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
      >
        {content &&
          Object.entries(content).map(([key, value], id) => (
            <SwiperSlide key={id}>
              <div className="content">
                <h2 className="title">{key}</h2>
                <p className="description">
                  $ {Math.floor(value * 1000) / 1000}
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
