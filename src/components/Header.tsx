import React from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Menu, Globe } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export function Header() {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const handleLanguageChange = (value: string) => {
    changeLanguage(value);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Explore Uzbekistan
            </h1>
          </div> 

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">{t('header.nav.home')}</a>
            <a href="#cities" className="hover:text-primary transition-colors">{t('header.nav.cities')}</a>
            <a href="#advantages" className="hover:text-primary transition-colors">{t('header.nav.advantages')}</a>
            <a href="#packages" className="hover:text-primary transition-colors">{t('header.nav.packages')}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t('header.nav.contact')}</a>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Select value={currentLanguage} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[100px] border-primary/30">
                <Globe className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">Eng</SelectItem>
                <SelectItem value="ru">Рус</SelectItem>
                <SelectItem value="uz">O'zbekcha</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}