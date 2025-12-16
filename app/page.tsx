import OgNavbar from '../components/OgNavbar';
import OgHero from '../components/OgHero';
import OgAbout from '../components/OgAbout';
import OgTestimonials from '../components/OgTestimonials'; 
import OgStats from '../components/OgStats'; 
import HeroSearch from '@/components/HeroSearch';
import OgContact from '../components/OgContact'; 
// Import the new Banner Component
import TripPlannerCTA from '../components/TripPlannerCTA'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <div className="relative z-10">
        
        {/* Navigation */}
        <OgNavbar />

        {/* 1. HOME SECTION */}
        <div id="home">
          <OgHero />
          <HeroSearch />
        </div>

        {/* 2. SERVICES SECTION */}
        <div id="services">
          <OgAbout />
        </div>

        {/* 3. PACKAGES / REVIEWS SECTION */}
        <div id="packages">
          <OgTestimonials />
          <OgStats />
        </div>

       

        {/* 5. CONTACT SECTION */}
        <div id="contact">
          <OgContact />
        </div>

      </div>
      <TripPlannerCTA/>
    </main>
  );
}