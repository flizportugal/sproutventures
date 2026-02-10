import SVAHero from './sections/SVAHero';
import SVASkills from './sections/SVASkills';
import SVAHowItWorks from './sections/SVAHowItWorks';
import SVAPlatformPreview from './sections/SVAPlatformPreview';
import SVATestimonials from './sections/SVATestimonials';
import SVAPricing from './sections/SVAPricing';
import SVAFAQ from './sections/SVAFAQ';
import SVAFinalCTA from './sections/SVAFinalCTA';
import SVAFooter from './sections/SVAFooter';

function App() {
  return (
    <div className="relative">
      <main className="relative">
        <SVAHero />
        <SVASkills />
        <SVAHowItWorks />
        <SVAPlatformPreview />
        <SVATestimonials />
        <SVAPricing />
        <SVAFAQ />
        <SVAFinalCTA />
        <SVAFooter />
      </main>
    </div>
  );
}

export default App;
