import React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../hooks/useLanguage";

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    travelers: "",
    dates: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success(t('contact.form.success'));
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-2xl mx-auto text-center"
            data-aos="fade-up"
          >
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-primary/20">
              <div className="mb-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">{t('contact.ui.thankYou')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('contact.ui.thankYouDesc')}
              </p>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {t('contact.ui.expectedResponse')}
              </Badge>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-8 sm:mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className="lg:col-span-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Card className="shadow-xl border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">{t('contact.ui.planAdventure')}</CardTitle>
                <p className="text-muted-foreground">
                  {t('contact.ui.planAdventureDesc')}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <label className="text-sm font-medium mb-2 block">{t('contact.form.name')} *</label>
                      <Input
                        type="text"
                        placeholder={t('contact.ui.enterFullName')}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="650"
                    >
                      <label className="text-sm font-medium mb-2 block">{t('contact.form.email')} *</label>
                      <Input
                        type="email"
                        placeholder={t('contact.ui.enterEmail')}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="700"
                    >
                      <label className="text-sm font-medium mb-2 block">{t('contact.form.phone')}</label>
                      <Input
                        type="tel"
                        placeholder={t('contact.ui.enterPhone')}
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="750"
                    >
                      <label className="text-sm font-medium mb-2 block">{t('contact.form.package')}</label>
                      <Select onValueChange={(value) => handleInputChange('package', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('contact.ui.selectPackage')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">{t('contact.packages.standard')}</SelectItem>
                          <SelectItem value="premium">{t('contact.packages.premium')}</SelectItem>
                          <SelectItem value="vip">{t('contact.packages.vip')}</SelectItem>
                          <SelectItem value="custom">{t('contact.packages.custom')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <label className="text-sm font-medium mb-2 block">{t('contact.form.travelers')}</label>
                      <Select onValueChange={(value) => handleInputChange('travelers', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('contact.ui.selectNumber')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{t('contact.travelers.1')}</SelectItem>
                          <SelectItem value="2">{t('contact.travelers.2')}</SelectItem>
                          <SelectItem value="3-4">{t('contact.travelers.3-4')}</SelectItem>
                          <SelectItem value="5-8">{t('contact.travelers.5-8')}</SelectItem>
                          <SelectItem value="9+">{t('contact.travelers.9+')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="850"
                    >
                      <label className="text-sm font-medium mb-2 block">{t('contact.form.dates')}</label>
                      <Input
                        type="text"
                        placeholder={t('contact.ui.enterDates')}
                        value={formData.dates}
                        onChange={(e) => handleInputChange('dates', e.target.value)}
                      />
                    </div>
                  </div>

                  <div 
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    <label className="text-sm font-medium mb-2 block">{t('contact.form.message')}</label>
                    <Textarea
                      placeholder={t('contact.ui.enterMessage')}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <div 
                    data-aos="fade-up"
                    data-aos-delay="950"
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white hover:cursor-pointer"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {t('contact.form.submit')}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      {t('contact.form.note')}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Contact Information */}
        <div 
            className="grid grid-cols-2 gap-4 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  {t('contact.contactInfo.ourOffice')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('contact.info.address')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  {t('contact.contactInfo.phoneWhatsapp')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('contact.info.phone')}<br />
                  +998 90 123 4567
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  {t('contact.contactInfo.email')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {t('contact.info.email')}<br />
                  tours@exploreuzb.com
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  {t('contact.contactInfo.businessHours')}
                  <span className="text-sm text-primary">{t('contact.contactInfo.tashkentTime')}</span>

                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {t('contact.contactInfo.monFri')}<br />
                  {t('contact.contactInfo.satSun')}<br />
                </p>
              </CardContent>
            </Card>
          </div>
      </div>
    </section>
  );
}