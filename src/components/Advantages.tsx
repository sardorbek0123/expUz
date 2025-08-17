import React from "react";
import { Card, CardContent } from "./ui/card";
import { Car, Building, Users, Award, Star, Shield } from "lucide-react";
import { useCounter } from './hooks/useCounter';

const advantages = [
  {
    icon: <Car className="h-8 w-8" />,
    title: "Premium Transport",
    description: "Modern, air-conditioned vehicles with experienced drivers for comfortable journeys between cities",
    features: ["Fast trains available", "Private car options", "Airport transfers included"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Quality Hotels",
    description: "Carefully selected accommodations ranging from comfortable 3-star to luxury 5-star properties",
    features: ["Daily breakfast included", "Central locations", "Traditional & modern options"],
    gradient: "from-primary/20 to-orange-500/20"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Guides",
    description: "Licensed local guides with deep knowledge of history, culture, and hidden gems of each destination",
    features: ["Multi-language support", "Cultural insights", "Flexible itineraries"],
    gradient: "from-green-500/20 to-emerald-500/20"
  }
];

const stats = [
  { number: 500, suffix: "+", label: "Happy Travelers", duration: 2000 },
  { number: 98, suffix: "%", label: "Satisfaction Rate", duration: 2200 },
  { number: 15, suffix: "", label: "Years Experience", duration: 1800 },
  { number: 24, suffix: "/7", label: "Support Available", duration: 1600 }
];

export function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Why Choose Explore Uzbekistan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive travel solutions with attention to every detail, 
            ensuring your journey through Uzbekistan is comfortable, authentic, and unforgettable.
          </p>
        </div>

        {/* Main Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card 
              key={advantage.title}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${advantage.gradient} border-2 border-primary/10 hover:border-primary/30`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {advantage.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-center mb-4">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {advantage.features.map((feature, featureIndex) => (
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
                className="text-center p-6 bg-white/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
          <div className="flex items-start space-x-4 p-6 bg-white/30 rounded-lg">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Licensed & Certified</h4>
              <p className="text-sm text-muted-foreground">All our guides are licensed and our company is certified by Uzbekistan tourism authorities.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white/30 rounded-lg">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Star className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">5-Star Reviews</h4>
              <p className="text-sm text-muted-foreground">Consistently rated 5 stars by travelers on TripAdvisor, Google, and other platforms.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white/30 rounded-lg">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Travel Insurance</h4>
              <p className="text-sm text-muted-foreground">Comprehensive travel insurance included in Premium and VIP packages for peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}