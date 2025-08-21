import React from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div 
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-primary">Explore Uzbekistan</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div 
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="font-semibold">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t('footer.links.home')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('cities')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t('footer.links.historicCities')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('packages')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t('footer.links.tourPackages')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('advantages')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t('footer.links.whyChooseUs')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t('footer.links.contact')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Destinations */}
            <div 
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="font-semibold">{t('footer.destinations')}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {t('footer.cities.tashkent')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {t('footer.cities.samarkand')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {t('footer.cities.bukhara')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {t('footer.cities.khiva')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {t('footer.cities.termez')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div 
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4 className="font-semibold">{t('footer.contactInfo')}</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('footer.address') }} />
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    {t('footer.phone')}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    {t('footer.email')}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    {t('footer.hours.weekdays')}<br />
                    {t('footer.hours.weekends')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div 
          className="py-8 border-t border-border"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Updated with Our Latest Tours</h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive travel tips, special offers, and updates about new destinations in Uzbekistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div 
          className="py-6 border-t border-border"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('footer.links.privacy')}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('footer.links.terms')}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('footer.links.cookiePolicy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}