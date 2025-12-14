import OgNavbar from '../components/OgNavbar';
import OgHero from '../components/OgHero';
import OgAbout from '../components/OgAbout';
import OgTestimonials from '../components/OgTestimonials'; // Import the new component
import OgStats from '../components/OgStats'; // Import the new component

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <div className="relative z-10">
        <OgNavbar />
        <OgHero />
        <OgAbout />
        <OgTestimonials />
        <OgStats />
      </div>
    </main>
  );
}