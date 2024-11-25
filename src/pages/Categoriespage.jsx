// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const Categoriespage = () => {
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      loop={true}
      slidesPerView={1.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='h-[80vh]  bg-green-400'>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-[80vh]  bg-purple-400'>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-[80vh]  bg-red-400'>Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-[80vh]  bg-blue-400'>Slide 4</div>
      </SwiperSlide>
      
      ...
    </Swiper>
  )
}

export default Categoriespage