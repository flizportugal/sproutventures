import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: "What's inside", href: '#whats-inside' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="w-full bg-text-primary py-16 lg:py-20 z-40 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mint/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={contentRef} className="w-full px-6 lg:px-12 max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mint to-emerald-500 flex items-center justify-center shadow-lg shadow-mint/20">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-2xl text-white">
                Sprout
              </span>
            </div>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Resilience is a skill. Start building it today.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-white/50 hover:text-mint transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-mint scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Youtube, label: 'YouTube' },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-mint/20 hover:scale-110 transition-all duration-300 group"
                onClick={(e) => e.preventDefault()}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white/50 group-hover:text-mint transition-colors" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 flex items-center gap-1">
            © 2026 Sprout Ventures Academy. Made with 
            <Heart className="w-3 h-3 text-mint fill-mint" />
            for families everywhere.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </button>
            <button className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
