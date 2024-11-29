import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './home-slider.css'
import WorkspaceCard from '../WorkspaceCard';
import PrivateImg from '/private.png';
import PublicImg from '/public.png';
import SemiPrivateImg from '/semi-private.png';

const HomeSlider = () => {
    const workspaces = [
        {
            title: "Private",
            image: PrivateImg,
            noOfUsers: "1 - 2 People",
            description: "A fully enclosed, secure space for individual and team work."
        },
        {
            title: "Semi-Private",
            image: SemiPrivateImg,
            noOfUsers: "1 - 2 People",
            description: "A shared workspace with designated areas offering some privacy."
        },
        {
            title: "Public",
            image: PublicImg,
            noOfUsers: "30+ People",
            description: " An open cummunal space for flexible work and collaboration."
        }
    ]
  return (
    <div className='cnt'>        
        <Swiper            
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}                       
            grabCursor={true}
            loop={true}
            // centeredSlides={true}
            slidesPerView={1}
            breakpoints={
                {
                  700: {
                    slidesPerView: 2
                   },
                //    1062: {
                //     slidesPerView: 3
                //    }
                }
               }
           
            pagination={{el:".swiper-pagination", clickable: true}}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
            }}            
            className='swiper_container'
        >
            {
                workspaces.map((workspace, index) => (
                    <SwiperSlide key={index} className='w-[80%]'>
                        <WorkspaceCard
                        image={workspace.image}
                        noOfUsers={workspace.noOfUsers}
                        title={workspace.title}
                        description={workspace.description}
                        />
                    </SwiperSlide>
                ))
            }
           
            {/* <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <AiOutlineArrowLeft/>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <AiOutlineArrowRight/>
                </div>
            </div> */}
            <div className="swiper-pagination"></div>
        </Swiper>
    </div>
  )
}

export default HomeSlider