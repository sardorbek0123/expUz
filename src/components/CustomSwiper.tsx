import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles for Swiper
const swiperStyles = `
  .swiper-custom .swiper-button-next,
  .swiper-custom .swiper-button-prev {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
  }
  
  .swiper-custom .swiper-button-next:hover,
  .swiper-custom .swiper-button-prev:hover {
    background: white;
    transform: scale(1.05);
  }
  
  .swiper-custom .swiper-button-next:after,
  .swiper-custom .swiper-button-prev:after {
    font-size: 16px;
    color: #d4741a;
    font-weight: bold;
  }
  
  .swiper-custom .swiper-pagination-bullet {
    background: #d4741a;
    opacity: 0.3;
    transition: all 0.2s;
  }
  
  .swiper-custom .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
  }
  
  .swiper-custom .swiper-pagination-bullet:hover {
    opacity: 0.7;
  }
  
  .swiper-custom .swiper-pagination {
    position: relative;
    margin-top: 24px;
  }
  
  .swiper-custom .swiper-pagination-bullet {
    margin: 0 4px;
  }
  
  @media (max-width: 768px) {
    .swiper-custom .swiper-button-next,
    .swiper-custom .swiper-button-prev {
      display: none;
    }
    
    .swiper-custom .swiper-pagination {
      margin-top: 16px;
    }
  }
`;

interface CustomSwiperProps {
  children: ReactNode[];
  slidesToShow?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  className?: string;
}

export function CustomSwiper({ 
  children, 
  slidesToShow = 3, 
  autoplay = true, 
  autoplaySpeed = 4000,
  dots = true,
  className = ""
}: CustomSwiperProps) {
  return (
    <div className={`${className}`}>
      <style>{swiperStyles}</style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={slidesToShow}
        navigation={true}
        pagination={dots ? { clickable: true } : false}
        autoplay={autoplay ? { delay: autoplaySpeed, disableOnInteraction: false } : false}
        loop={false}
        resistance={true}
        resistanceRatio={0.85}
        watchSlidesProgress={true}
        preventInteractionOnTransition={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 12
          },
          768: {
            slidesPerView: slidesToShow,
            spaceBetween: 16
          }
        }}
        className="swiper-custom"
        style={{
          '--swiper-navigation-color': 'var(--primary)',
          '--swiper-pagination-color': 'var(--primary)',
          '--swiper-pagination-bullet-inactive-color': 'var(--primary)',
          '--swiper-pagination-bullet-inactive-opacity': '0.3'
        } as React.CSSProperties}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}