import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";
import { CustomSwiper } from './CustomSwiper';
import { useLanguage } from '../hooks/useLanguage';

export function TourPackages() {
  const { t } = useLanguage();

  const packages = [
    {
      name: t('packages.standard.name'),
      price: t('packages.standard.price'),
      duration: t('packages.standard.duration'),
      icon: <Zap className="h-3 sm:h-4 w-3 sm:w-4" />,
      badge: t('packages.standard.badge'),
      badgeColor: "bg-blue-500",
      description: t('packages.standard.description'),
      features: t('packages.standard.features', { returnObjects: true }),
      includes: t('packages.standard.includes'),
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      name: t('packages.premium.name'),
      price: t('packages.premium.price'),
      duration: t('packages.premium.duration'),
      icon: <Star className="h-3 sm:h-4 w-3 sm:w-4" />,
      badge: t('packages.premium.badge'),
      badgeColor: "bg-primary",
      description: t('packages.premium.description'),
      features: t('packages.premium.features', { returnObjects: true }),
      includes: t('packages.premium.includes'),
      gradient: "from-primary/20 to-orange-500/20",
      borderColor: "border-primary/30"
    },
    {
      name: t('packages.vip.name'),
      price: t('packages.vip.price'),
      duration: t('packages.vip.duration'),
      icon: <Crown className="h-3 sm:h-4 w-3 sm:w-4" />,
      badge: t('packages.vip.badge'),
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      description: t('packages.vip.description'),
      features: t('packages.vip.features', { returnObjects: true }),
      includes: t('packages.vip.includes'),
      gradient: "from-yellow-400/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-8 sm:mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t('packages.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('packages.subtitle')}
          </p>
        </div>

        {/* Mobile Cards */}
        <div className="block lg:hidden mb-8 sm:mb-16">
          <div className="grid grid-cols-3 gap-3">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name}
                className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${pkg.gradient} border ${pkg.borderColor} min-h-[250px] flex flex-col`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Badge */}
                <div className="absolute top-2 right-2 hidden sm:block">
                  <Badge className={`${pkg.badgeColor} text-white border-0 text-[9px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1`}>
                    {pkg.badge}
                  </Badge>
                </div>

                <CardHeader className="text-center pb-1 sm:pb-2 px-1 sm:px-3 pt-1 sm:pt-4">
                  <div className="flex justify-center mb-1 sm:mb-2">
                    <div className="p-1 sm:p-2 bg-primary/10 rounded-full">
                      <div className="w-3 h-3 sm:w-4 sm:h-4">
                        {pkg.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xs sm:text-sm mb-0 sm:mb-1">{pkg.name}</CardTitle>
                  <div className="text-lg font-bold text-primary mb-0 sm:mb-1">{pkg.price}</div>
                  <div className="text-xs text-muted-foreground mb-0 sm:mb-1">{pkg.duration}</div>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col px-1 sm:px-3 pb-1 sm:pb-3">
                  {/* Features List - limited to 3 */}
                  <div className="space-y-0.5 sm:space-y-1 mb-1 sm:mb-3">
                    {Array.isArray(pkg.features) && pkg.features.slice(0, 3).map((feature, featureIndex) => (
                      <div 
                        key={feature} 
                        className="flex items-start"
                        data-aos="fade-right"
                        data-aos-delay={index * 200 + featureIndex * 50}
                      >
                        <Check className="h-2 sm:h-3 w-2 sm:w-3 text-green-500 mt-0.5 mr-1 sm:mr-2 flex-shrink-0" />
                        <span className="text-[9px] sm:text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1"></div>

                  {/* CTA Button - positioned at bottom */}
                  <div className="mt-auto">
                    <Button 
                      onClick={scrollToContact}
                      size="sm"
                      className={`w-full text-[9px] sm:text-xs ${
                        index === 1 
                          ? 'bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white' 
                          : index === 2 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white'
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                    >
                      {t('packages.bookNow')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${pkg.gradient} border-2 ${pkg.borderColor} ${
                index === 1 ? 'lg:scale-105 lg:shadow-xl' : ''
              } flex flex-col`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <Badge className={`${pkg.badgeColor} text-white border-0`}>
                  {pkg.badge}
                </Badge>
              </div>

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {pkg.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                <div className="text-muted-foreground">{pkg.duration}</div>
                <p className="text-sm text-muted-foreground mt-3">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0 flex-1 flex flex-col">
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {Array.isArray(pkg.features) && pkg.features.map((feature, featureIndex) => (
                    <div 
                      key={feature} 
                      className="flex items-start"
                      data-aos="fade-right"
                      data-aos-delay={index * 200 + featureIndex * 50}
                    >
                      <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Includes */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-sm mb-2">{t('packages.packageIncludes')}</h4>
                  <p className="text-xs text-muted-foreground">{pkg.includes}</p>
                </div>

                {/* CTA Button - pushed to bottom with mt-auto */}
                <div className="mt-auto">
                  <Button 
                    onClick={scrollToContact}
                    className={`hover:cursor-pointer w-full ${
                      index === 1 
                        ? 'bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white' 
                        : index === 2
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white'
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    {t('packages.bookNow')} {pkg.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div 
          className="grid grid-cols-3 gap-4 md:gap-6 text-center overflow-x-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="p-6 bg-white/50 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">{t('packages.additionalInfo.satisfaction')}</div>
          </div>
          <div className="p-6 bg-white/50 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">{t('packages.additionalInfo.support')}</div>
          </div>
          <div className="p-6 bg-white/50 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-2">Free</div>
            <div className="text-sm text-muted-foreground">{t('packages.additionalInfo.cancellation')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}