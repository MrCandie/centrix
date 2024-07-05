import Consultant from "./Consultant";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function () {
  return (
    <div className="w-full flex flex-col gap-3 bg-white p-4 rounded-md shadow-md">
      <h1 className="">Top Consultants</h1>
      <hr />
      <div className="w-full">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={40}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4.3,
              spaceBetween: 30,
            },
          }}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((_, i) => (
            <SwiperSlide key={i}>
              <Consultant />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
