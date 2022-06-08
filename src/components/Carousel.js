import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/carousel.module.scss";

const Carousel = ({ content, slidesPerView }) => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        className="myCarousel"
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {content &&
          Object.entries(content).map(([key, value]) => (
            <SwiperSlide>
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
