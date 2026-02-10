import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollProgress from './components/ScrollProgress';
import FloatingParticles from './components/FloatingParticles';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import WhatsInside from './sections/WhatsInside';
import The5RFlow from './sections/The5RFlow';
import SocialProof from './sections/SocialProof';
import Testimonials from './sections/Testimonials';
import ComparisonTable from './sections/ComparisonTable';
import HowItWorks from './sections/HowItWorks';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timeout = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);

      if (!maxScroll || pinned.length === 0) return;

      // Build pinned ranges with settle centers
      const pinnedRanges = pinned.map((st) => {
        const start = st.start / maxScroll;
        const end = (st.end ?? st.start) / maxScroll;
        // Settle center is at 35% for hero, 50% for final CTA
        const settleRatio = st.trigger?.classList.contains('section-pinned') && 
          st.trigger?.querySelector('.bg-paper-lavender') ? 0.5 : 0.35;
        const center = start + (end - start) * settleRatio;
        return { start, end, center };
      });

      // Global snap configuration
      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            // Check if within any pinned range (with small buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            
            if (!inPinned) return value; // Flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );

            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Grain Overlay */}
      <div className="grain-overlay"></div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <WhatsInside />
        <The5RFlow />
        <SocialProof />
        <Testimonials />
        <ComparisonTable />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
