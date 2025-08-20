import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Camera } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CustomSwiper } from "./CustomSwiper";

const cities = [
  {
    name: "Samarkand",
    description: "Legendary Silk Road city with stunning Islamic architecture",
    image:
      "https://images.unsplash.com/photo-1728565721798-cf65c7bf1efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW1hcmthbmQlMjBSZWdpc3RhbiUyMFNxdWFyZSUyMFV6YmVraXN0YW58ZW58MXx8fHwxNzU0OTk2MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Registan Square", "Shah-i-Zinda", "Bibi Khanum Mosque"],
    duration: "3 days",
    badge: "UNESCO",
  },
  {
    name: "Bukhara",
    description: "Living museum of Central Asian Islamic civilization",
    image:
      "https://images.unsplash.com/photo-1719995153986-63e529a32585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdWtoYXJhJTIwaGlzdG9yaWMlMjBhcmNoaXRlY3R1cmUlMjBVemJla2lzdGFufGVufDF8fHx8MTc1NDk5NjM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Poi Kalyan Complex", "Ark Fortress", "Lyab-i-Hauz"],
    duration: "2 days",
    badge: "UNESCO",
  },
  {
    name: "Khiva",
    description: "Perfectly preserved medieval city within ancient walls",
    image:
      "https://images.unsplash.com/photo-1426329559439-876ed4b77295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaGl2YSUyMGFuY2llbnQlMjBjaXR5JTIwd2FsbHMlMjBVemJla2lzdGFufGVufDF8fHx8MTc1NDk5NjM1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Itchan Kala", "Kunya Ark", "Islam Khoja Minaret"],
    duration: "2 days",
    badge: "UNESCO",
  },
  {
    name: "Termez",
    description: "Ancient Buddhist heritage meets Islamic architecture",
    image:
      "https://images.unsplash.com/photo-1569531955316-e353abac4ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZXJtZXolMjBCdWRkaGlzdCUyMGhlcml0YWdlJTIwVXpiZWtpc3RhbnxlbnwxfHx8fDE3NTQ5OTYzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Al-Hakim at-Termezi", "Fayaz Tepa", "Sultan Saodat"],
    duration: "1 day",
    badge: "Buddhist Heritage",
  },
  {
    name: "Tashkent",
    description:
      "Modern capital blending Soviet architecture with Islamic heritage",
    image:
      "https://images.unsplash.com/photo-1681195579718-e738abcaa178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYXNoa2VudCUyMFV6YmVraXN0YW4lMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU0OTk2MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Independence Square", "Chorsu Bazaar", "Modern Metro"],
    duration: "2 days",
    badge: "Capital",
  },
];

export function Cities() {
  const scrollToVideo = () => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  return (
    <section
      id="cities"
      className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Discover Historic Cities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Journey through millennia of history as you explore five magnificent
            cities that showcase the rich cultural heritage of the ancient Silk
            Road.
          </p>
        </div>

        {/* Mobile Swiper */}
        <div className="block md:hidden mb-8">
          <CustomSwiper
            slidesToShow={2}
            autoplay
            autoplaySpeed={5000}
            dots
            className="pb-8"
          >
            {cities.map((city, index) => (
              <Card
                key={city.name}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={city.image}
                    alt={city.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex flex-col gap-1 sm:gap-2">
                    <Badge className="bg-primary/90 text-white border-0 text-[10px] sm:text-xs px-1 sm:px-2 py-0 sm:py-1 w-fit">
                      {city.badge}
                    </Badge>

                    {/* Duration */}
                    <div className="flex items-center text-white text-[10px] sm:text-xs bg-black/30 rounded-full px-1 sm:px-2 py-0 sm:py-1 w-fit">
                      <Clock className="h-3 w-3 mr-1" />
                      {city.duration}
                    </div>
                  </div>

                  {/* City Name Overlay */}
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="text-lg font-bold">{city.name}</h3>
                  </div>
                </div>

                <CardContent className="p-2 md:p-4">
                  <p className="text-muted-foreground mb-3 leading-relaxed text-[10px] sm:text-sm line-clamp-2">
                    {city.description}
                  </p>

                  <div className="space-y-1">
                    <div className="flex items-center text-[10px] sm:text-xs font-medium mb-2">
                      <Camera className="h-3 w-3 mr-1 text-primary" />
                      Key Attractions
                    </div>
                    {city.highlights.slice(0, 2).map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start text-xs text-muted-foreground"
                      >
                        <MapPin className="h-2 w-2 mr-1 mt-1 text-primary flex-shrink-0" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border">
                    <button 
                      onClick={scrollToVideo}
                      className="text-primary hover:text-primary/80 text-[10px] sm:text-xs font-medium transition-colors group-hover:underline cursor-pointer"
                    >
                      Explore {city.name} →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CustomSwiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <Card
              key={city.name}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={city.image}
                  alt={city.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-white border-0">
                    {city.badge}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 flex items-center text-white text-sm bg-black/30 rounded-full px-3 py-1">
                  <Clock className="h-3 w-3 mr-1" />
                  {city.duration}
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{city.name}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {city.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm font-medium mb-2">
                    <Camera className="h-4 w-4 mr-2 text-primary" />
                    Key Attractions
                  </div>
                  {city.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <MapPin className="h-3 w-3 mr-2 mt-1 text-primary flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <button 
                    onClick={scrollToVideo}
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors group-hover:underline cursor-pointer"
                  >
                    Explore {city.name} →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center mb-8 mt-16" data-aos="fade-up">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Experience Uzbekistan
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our immersive video to see the beauty and culture of Uzbekistan come to life
          </p>
        </div>

        {/* Video (default controls) */}
        <div className="relative w-full max-w-3xl mx-auto mt-12">
          <video
            className="w-full aspect-video rounded-lg bg-black"
            poster="/preview.png"
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* View Packages Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => {
                const packagesSection = document.getElementById('packages');
                if (packagesSection) {
                  packagesSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-base"
            >
              View Packages
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
