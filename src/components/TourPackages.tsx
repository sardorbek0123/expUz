import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";
import { CustomSwiper } from './CustomSwiper';

const packages = [
  {
    name: "Standard Package",
    price: "$1,399",
    duration: "7 Days",
    icon: <Zap className="h-6 w-6" />,
    badge: "Most Popular",
    badgeColor: "bg-blue-500",
    description: "Perfect introduction to Uzbekistan's highlights with comfortable accommodations and guided group tours.",
    features: [
      "2–3★ hotels with daily breakfast",
      "One-way airport transfer",
      "Shared transport between cities",
      "Group sightseeing in major cities with guide",
      "Main site entrance fees",
      "Daily breakfast + some meals per itinerary",
      "Local support & basic travel tips"
    ],
    includes: "Budget accommodation, breakfast, group tours, basic support",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    name: "Premium Package",
    price: "$1,899",
    duration: "10 Days",
    icon: <Star className="h-6 w-6" />,
    badge: "Best Value",
    badgeColor: "bg-primary",
    description: "Enhanced experience with quality hotels, private transport, and authentic local experiences.",
    features: [
      "4★ hotels with breakfast & 2–3 curated meals",
      "Round-trip airport transfers",
      "Fast train/private car between cities",
      "Private/small-group guided tours",
      "All entrance fees & museum visits",
      "Local experiences (workshops, cooking class, hammam)",
      "SIM/Wi-Fi on request",
      "Travel insurance included",
      "Enhanced support throughout journey"
    ],
    includes: "4-star hotels, curated meals, private transport, local experiences",
    gradient: "from-primary/20 to-orange-500/20",
    borderColor: "border-primary/30"
  },
  {
    name: "VIP Package",
    price: "$2,299",
    duration: "14 Days",
    icon: <Crown className="h-6 w-6" />,
    badge: "Ultimate Luxury",
    badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
    description: "Ultimate luxury experience with boutique hotels, VIP services, and exclusive access throughout.",
    features: [
      "4★ or 5★ boutique luxury hotels with meals",
      "VIP airport service & private transfers",
      "Expert guide & 24/7 concierge",
      "All fees + exclusive after-hours visits",
      "Private events & exclusive experiences",
      "Custom itinerary & bespoke activities",
      "Premium insurance coverage",
      "Welcome amenities included",
      "All gratuities included",
      "Personal concierge service"
    ],
    includes: "Luxury hotels, VIP services, custom experiences, full concierge",
    gradient: "from-yellow-400/20 to-orange-500/20",
    borderColor: "border-yellow-500/30"
  }
];

export function TourPackages() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-12 sm:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Choose Your Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From comfortable group tours to luxury private experiences, we have the perfect package 
            to match your travel style and create unforgettable memories in Uzbekistan.
          </p>
        </div>

        {/* Mobile Swiper */}
        <div className="block lg:hidden mb-16">
          <CustomSwiper slidesToShow={1.1} autoplay={false} autoplaySpeed={5000}>
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${pkg.gradient} border-2 ${pkg.borderColor} min-h-[600px] flex flex-col`}
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
                    {pkg.features.slice(0, 5).map((feature, featureIndex) => (
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
                    {pkg.features.length > 5 && (
                      <div className="text-xs text-muted-foreground">
                        +{pkg.features.length - 5} more features...
                      </div>
                    )}
                  </div>

                  {/* Includes */}
                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-sm mb-2">Package Includes:</h4>
                    <p className="text-xs text-muted-foreground">{pkg.includes}</p>
                  </div>

                  {/* CTA Button - pushed to bottom with mt-auto */}
                  <div className="mt-auto">
                    <Button 
                      onClick={scrollToContact}
                      className={`w-full ${
                        index === 1 
                          ? 'bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white' 
                          : index === 2
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white'
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                    >
                      Book {pkg.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CustomSwiper>
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
                  {pkg.features.map((feature, featureIndex) => (
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
                  <h4 className="font-semibold text-sm mb-2">Package Includes:</h4>
                  <p className="text-xs text-muted-foreground">{pkg.includes}</p>
                </div>

                {/* CTA Button - pushed to bottom with mt-auto */}
                <div className="mt-auto">
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${
                      index === 1 
                        ? 'bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white' 
                        : index === 2
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white'
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    Book {pkg.name}
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
            <div className="text-sm text-muted-foreground">Satisfaction Guarantee</div>
          </div>
          <div className="p-6 bg-white/50 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Customer Support</div>
          </div>
          <div className="p-6 bg-white/50 rounded-lg border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-2">Free</div>
            <div className="text-sm text-muted-foreground">Cancellation up to 48h</div>
          </div>
        </div>
      </div>
    </section>
  );
}