import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Pagination, Navigation } from 'swiper/modules';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './default.css'

const SwiperComponent = () => {
  return (
    <div className='cnt'>
        <h1>Flower Gallery</h1>
        <Swiper
            effect='coverflow'
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            pagination={{el:".swiper-pagination", clickable: true}}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'
        >
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600" alt="flower1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="flower2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&w=600" alt="flower3"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/29449163/pexels-photo-29449163/free-photo-of-close-up-portrait-of-a-gray-british-shorthair-cat.jpeg?auto=compress&cs=tinysrgb&w=600" alt="flower4"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/7726100/pexels-photo-7726100.jpeg?auto=compress&cs=tinysrgb&w=600" alt="flower5"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/1770918/pexels-photo-1770918.jpeg?auto=compress&cs=tinysrgb&w=600" alt="flower6"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.pexels.com/photos/6853299/pexels-photo-6853299.jpeg?auto=compress&cs=tinysrgb&w=600" alt="flower7"/>
            </SwiperSlide>
            <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <AiOutlineArrowLeft/>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <AiOutlineArrowRight/>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </Swiper>
    </div>
  )
}

export default SwiperComponent