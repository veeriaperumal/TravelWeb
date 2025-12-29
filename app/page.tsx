import OgNavbar from '../components/OgNavbar';
import OgHero from '../components/OgHero';
import OgAbout from '../components/OgAbout';
import OgTestimonials from '../components/OgTestimonials';
import OgStats from '../components/OgStats';
import HeroSearch from '@/components/HeroSearch';
import OgContact from '../components/OgContact';
import TripPlannerCTA from '../components/TripPlannerCTA';
import FAQSection from '@/components/FAQSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

// ✅ IMPORT SERVICES
import ServicesHomeSection from '@/components/ServicesHomeSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative z-10">

        {/* Navigation */}
        <OgNavbar />

        {/* HOME */}
        <div id="home">
          <OgHero />
          <HeroSearch />
        </div>

        {/* SERVICES */}
        <div id="services">
          <ServicesHomeSection />
        </div>

        {/* PACKAGES */}
        <div id="packages">
          <OgTestimonials />
          <OgStats />
        </div>

        {/* CONTACT */}
        <div id="contact">
          <OgContact />
        </div>
      </div>

      {/* Footer Sections */}
      <TripPlannerCTA />
      <FAQSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
