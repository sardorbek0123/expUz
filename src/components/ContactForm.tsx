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

export function ContactForm() {
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
      toast.success("Thank you! We'll contact you within 24 hours to discuss your Uzbekistan adventure.");
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
              <h2 className="text-3xl font-bold mb-4 text-primary">Thank You!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your inquiry has been received. Our travel specialists will contact you within 24 hours 
                to discuss your Uzbekistan adventure and provide personalized recommendations.
              </p>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Expected Response: Within 24 hours
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
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to explore the wonders of Uzbekistan? Fill out the form below and our travel experts 
            will create a personalized itinerary just for you.
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
                <CardTitle className="text-2xl">Plan Your Adventure</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your travel preferences and we'll create the perfect Uzbekistan experience for you.
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
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="650"
                    >
                      <label className="text-sm font-medium mb-2 block">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
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
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="750"
                    >
                      <label className="text-sm font-medium mb-2 block">Preferred Package</label>
                      <Select onValueChange={(value) => handleInputChange('package', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Package - $899</SelectItem>
                          <SelectItem value="premium">Premium Package - $1,499</SelectItem>
                          <SelectItem value="vip">VIP Package - $2,299</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <label className="text-sm font-medium mb-2 block">Number of Travelers</label>
                      <Select onValueChange={(value) => handleInputChange('travelers', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3-4">3-4 People</SelectItem>
                          <SelectItem value="5-8">5-8 People</SelectItem>
                          <SelectItem value="9+">9+ People (Group)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div 
                      data-aos="fade-up"
                      data-aos-delay="850"
                    >
                      <label className="text-sm font-medium mb-2 block">Preferred Travel Dates</label>
                      <Input
                        type="text"
                        placeholder="e.g., March 2025 or Spring 2025"
                        value={formData.dates}
                        onChange={(e) => handleInputChange('dates', e.target.value)}
                      />
                    </div>
                  </div>

                  <div 
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    <label className="text-sm font-medium mb-2 block">Additional Information</label>
                    <Textarea
                      placeholder="Tell us about your interests, special requirements, or any questions you have..."
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
                      className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Inquiry
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      We'll respond within 24 hours with a personalized itinerary and pricing.
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
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Amir Timur Street<br />
                  Tashkent 100000<br />
                  Uzbekistan
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Phone & WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +998 71 123 4567<br />
                  +998 90 123 4567
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">
                  info@exploreuzb.com<br />
                  tours@exploreuzb.com
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Business Hours
                  <span className="text-sm text-primary">(Tashkent Time, GMT+5)</span>

                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat - Sun: 10:00 AM - 4:00 PM<br />
                </p>
              </CardContent>
            </Card>
          </div>
      </div>
    </section>
  );
}