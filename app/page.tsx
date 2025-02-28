import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ParallaxSection from '@/components/ParallaxSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ParallaxSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}