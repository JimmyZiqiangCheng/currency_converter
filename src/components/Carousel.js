import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/carousel.module.scss";

const Carousel = ({ content, slidesPerView, slidesPerGroup }) => {
  return (
    <div className={styles.carousel}>
      <Swiper
        className="myCarousel"
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {Object.entries(content).map(([key, value]) => (
          <SwiperSlide>
            <div className="content">
              <h2 className="title">{key}</h2>
              <p className="description">$ {Math.floor(value * 100) / 100}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
