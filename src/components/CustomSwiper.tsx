import { useState, useEffect, useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  slidesToShow = 1.2, 
  autoplay = true, 
  autoplaySpeed = 4000,
  dots = true,
  className = ""
}: CustomSwiperProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout>();

  const totalSlides = children.length;
  const maxSlide = Math.max(0, totalSlides - Math.floor(slidesToShow));

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const startAutoplay = () => {
    if (autoplay && totalSlides > 1 && !isMobile) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
      }, autoplaySpeed);
    }
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [maxSlide, autoplay, autoplaySpeed, isMobile]);

  const goToSlide = (slideIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(slideIndex, maxSlide));
    setCurrentSlide(clampedIndex);
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAutoplay();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    setTranslateX(-diffX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 30; // Lower threshold for mobile
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTranslateX(0);
    startAutoplay();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return; // Disable mouse drag on mobile
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoplay();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isMobile) return;
    const currentX = e.clientX;
    const diffX = startX - currentX;
    setTranslateX(-diffX);
  };

  const handleMouseUp = () => {
    if (!isDragging || isMobile) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTranslateX(0);
    startAutoplay();
  };

  const slideWidth = 100 / slidesToShow;
  const transform = `translateX(calc(-${currentSlide * slideWidth}% + ${isDragging ? translateX : 0}px))`;

  return (
    <div className={`relative ${className}`}>
      {/* Swiper Container */}
      <div 
        ref={swiperRef}
        className="overflow-hidden"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-1 sm:px-2"
              style={{ width: `${slideWidth}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile for better UX */}
      {totalSlides > 1 && !isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide >= maxSlide}
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </>
      )}

      {/* Dots Indicator - Enhanced for mobile */}
      {dots && totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-4 sm:mt-6">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-primary' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}