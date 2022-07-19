import "./portfolio.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import dataN from './data.js';
import { Pagination, Navigation } from 'swiper';
import  { Swiper, SwiperSlide} from 'swiper/react';

export default function Portfolio() {

 
  console.log(dataN)
  return (
    <div className='portfolio' id="portfolio">
      <h2>My Portfolio</h2>
      <Swiper className="swiper"
      modules={[Navigation,Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {dataN.map( project => (
        <SwiperSlide className="swiperSlide" key={project.id}>
          <div className="wrapper">
            <h3 className="projectTitle">{project.projectName}</h3>
            <p>{project.description}</p>
            <img className="projectImg" src={project.img} alt=""/>
          </div>
        </SwiperSlide>
        
      ))}
      ...
    </Swiper>
    </div>
  )
}
