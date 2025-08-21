import React from "react";
import { Card, CardContent } from "./ui/card";
import { Car, Building, Users, Award, Star, Shield } from "lucide-react";
import { useCounter } from './hooks/useCounter';
import { useLanguage } from '../hooks/useLanguage';

export function Advantages() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: <Car className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      title: t('advantages.transport.title'),
      description: t('advantages.transport.description'),
      features: t('advantages.transport.features', { returnObjects: true }),
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Building className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      title: t('advantages.hotels.title'),
      description: t('advantages.hotels.description'),
      features: t('advantages.hotels.features', { returnObjects: true }),
      gradient: "from-primary/20 to-orange-500/20"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />,
      title: t('advantages.guides.title'),
      description: t('advantages.guides.description'),
      features: t('advantages.guides.features', { returnObjects: true }),
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const stats = [
    { number: 500, suffix: "+", label: t('advantages.stats.happyTravelers'), duration: 2000 },
    { number: 98, suffix: "%", label: t('advantages.stats.satisfactionRate'), duration: 2200 },
    { number: 15, suffix: "", label: t('advantages.stats.yearsExperience'), duration: 1800 },
    { number: 24, suffix: "/7", label: t('advantages.stats.supportAvailable'), duration: 1600 }
  ];

  return (
    <section id="advantages" className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-8 sm:mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t('advantages.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('advantages.subtitle')}
          </p>
        </div>

        {/* Main Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {advantages.map((advantage, index) => (
            <Card 
              key={advantage.title}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${advantage.gradient} border-2 border-primary/10 hover:border-primary/30`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <CardContent className="p-4 sm:p-6 md:p-8">
                {/* Icon */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 md:p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {advantage.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {advantage.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {Array.isArray(advantage.features) && advantage.features.map((feature, featureIndex) => (
                    <div 
                      key={feature} 
                      className="flex items-center text-sm"
                      data-aos="fade-right"
                      data-aos-delay={index * 200 + featureIndex * 100}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {stats.map((stat, index) => {
            const { count, ref } = useCounter({ 
              end: stat.number, 
              duration: stat.duration 
            });
            
            return (
              <div 
                key={stat.label} 
                ref={ref}
                className="text-center p-3 sm:p-4 md:p-6 bg-white/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/30 rounded-lg">
            <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">{t('advantages.benefits.licensed.title')}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('advantages.benefits.licensed.description')}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/30 rounded-lg">
            <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">{t('advantages.benefits.reviews.title')}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('advantages.benefits.reviews.description')}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/30 rounded-lg">
            <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">{t('advantages.benefits.insurance.title')}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('advantages.benefits.insurance.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}