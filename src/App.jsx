import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cities } from "./components/Cities";
import { TourPackages } from "./components/TourPackages";
import { Advantages } from "./components/Advantages";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Cities />
      <TourPackages />
      <Advantages />
      <ContactForm />
      <Footer />
    </div>
  );
}