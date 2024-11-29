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
import { AiOutlineArrowRight } from 'react-icons/ai';

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
    <div className="swiper_container py-8 px-4 mx-auto h-screen max-w-[1200px]">
      <h1 className="text-center text-4xl font-extrabold ">Category</h1>
      <p className='text-center leading-4 mt-2'>Pick your Category to proceed:</p>
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
        pagination={
          { 
            el:'.swiper-custom-pagination',
            clickable: true,
            renderBullet: function(index, className){
              return `<div class="${className}">
              <span class="number">${index+1}</span>
              <span class ="line"></span>
              </div>`
            }
          }
        }      
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
          <SwiperSlide key={index} className='w-[80%]'>
            <CategoryCard
              image={category.image}
              role={category.role}
              description={category.description}
              isInFocus={index === activeIndex}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-custom-pagination">
        </div>
      </Swiper>      
      <div className='flex items-center justify-center'>
        <button className='border-green-color'>
          Next
          <AiOutlineArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;
