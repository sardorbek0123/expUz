import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCounter } from './hooks/useCounter';
import { useLanguage } from '../hooks/useLanguage';

export function Hero() {
  const { t } = useLanguage();
  const { count: citiesCount, ref: citiesRef } = useCounter({ end: 5, duration: 2000 });
  const { count: historyCount, ref: historyRef } = useCounter({ end: 2000, duration: 2500 });
  const { count: experienceCount, ref: experienceRef } = useCounter({ end: 100, duration: 2000 });

  const scrollToContact = () => {
    const contactSection = document.getElementById('cities');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/intro_bg.jpg"
          alt="Registan Square in Samarkand, Uzbekistan - Famous Islamic architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 uzbek-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-white space-y-6">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t('hero.title.part1')}
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 bg-clip-text">
                {t('hero.title.part2')}
              </span>
            </h1>
            
            <p 
              className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t('hero.subtitle')}
            </p>

            <div 
              className="pt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white px-8 py-6 text-lg group hover:cursor-pointer"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="text-center" ref={citiesRef}>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">{citiesCount}</div>
                <div className="text-sm text-gray-300">{t('hero.stats.cities')}</div>
              </div>
              <div className="text-center" ref={historyRef}>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">{historyCount}+</div>
                <div className="text-sm text-gray-300">{t('hero.stats.history')}</div>
              </div>
              <div className="text-center" ref={experienceRef}>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">{experienceCount}%</div>
                <div className="text-sm text-gray-300">{t('hero.stats.experience')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}