import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';
import { gsap } from 'gsap';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      '.nav-logo',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.nav-link',
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, delay: 0.3, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.nav-cta',
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.6, delay: 0.5, ease: 'power2.out' }
    );
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="nav-logo flex items-center gap-2.5 group cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-mint to-emerald-500 flex items-center justify-center shadow-lg shadow-mint/30 group-hover:shadow-mint/50 transition-shadow duration-300">
            <Leaf className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <span className="font-heading font-bold text-xl text-text-primary">
            Sprout
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'How it works', id: 'how-it-works' },
            { label: "What's inside", id: 'whats-inside' },
            { label: 'Reviews', id: 'reviews' },
            { label: 'FAQ', id: 'faq' },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="nav-link relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('pricing')}
          className="nav-cta btn-primary text-sm py-2.5 px-6 rounded-xl"
        >
          Get the Kit
        </button>
      </div>
    </nav>
  );
}
