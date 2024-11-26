import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './carousel.css';
import { useState } from 'react';
import CategoryCard from '../categoryCard';
import StudentImg from '/student.png';
import userImg from '/user.png';
import SiwesImg from '/siwes.png';

const SwiperComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      image: userImg,
      role: 'User',
      description: 'Focused on academic growth, utilizing the platform to support learning and collaboration.',
    },
    {
      image: SiwesImg,
      role: 'SIWES',
      description: 'Focused on academic growth, utilizing the platform to support learning and collaboration.',
    },
    {
      image: StudentImg,
      role: 'Student',
      description: 'Focused on academic growth, utilizing the platform to support learning and collaboration.',
    },
  ];

  return (
    <div className="swiper_container">
      <h1 className="text-center text-4xl font-extrabold ">Category</h1>
      <p className='text-center leading-4 mt-1'>Pick your Category to proceed:</p>
      <p className='text-center'>User, Students or SIWES</p>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container mt-5"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryCard
              image={category.image}
              role={category.role}
              description={category.description}
              isInFocus={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
