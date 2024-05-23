import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const SliderImg = ({imgs}) => {
  return (
    <div className="">
      <div className="">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            el: ".pagination",
            clickable: true,
          }}
          slidesPerView={'auto'}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            "@0.50": {
              slidesPerView: 1.25,
              spaceBetween: 25,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            "@1.25": {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.75": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {imgs?.map((img) => (
            <SwiperSlide key={img.id}>
              <Card img={img.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=".paginationSlider"/>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg">
      <img src={img} className=""/>
    </div>
  );
};

export { SliderImg };