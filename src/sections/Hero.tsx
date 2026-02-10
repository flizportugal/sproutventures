import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, ClipboardList, Calendar, ChevronRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Blobs entrance
      tl.fromTo(
        '.blob-element',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, stagger: 0.2 },
        0
      );

      // Hero card entrance
      tl.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        0.3
      );

      // Headline lines stagger with character animation
      const headlineLines = headlineRef.current?.querySelectorAll('.headline-line');
      if (headlineLines) {
        headlineLines.forEach((line, lineIndex) => {
          tl.fromTo(
            line,
            { opacity: 0, y: 30, rotateX: -20 },
            { opacity: 1, y: 0, rotateX: 0, duration: 0.6 },
            0.5 + lineIndex * 0.15
          );
        });
      }

      // Subheadline
      tl.fromTo(
        subheadRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.9
      );

      // Collage cards with 3D effect
      const collageCards = collageRef.current?.querySelectorAll('.collage-card');
      if (collageCards) {
        collageCards.forEach((card, i) => {
          tl.fromTo(
            card,
            { opacity: 0, scale: 0.8, y: 30, rotateY: -15 },
            { 
              opacity: 1, 
              scale: 1, 
              y: 0, 
              rotateY: 0, 
              duration: 0.6, 
              ease: 'back.out(1.7)'
            },
            0.7 + i * 0.12
          );
        });
      }

      // CTA row
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        1.1
      );

      // Trust line
      tl.fromTo(
        trustRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        1.2
      );

      // Sparkle animation
      gsap.to('.sparkle-icon', {
        rotate: 360,
        duration: 8,
        repeat: -1,
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.8,
          onLeaveBack: () => {
            gsap.set(cardRef.current, { opacity: 1, y: 0, scale: 1 });
            const cards = collageRef.current?.querySelectorAll('.collage-card');
            if (cards && cards.length > 0) {
              gsap.set(cards, { opacity: 1, x: 0, y: 0 });
            }
          },
        },
      });

      // SETTLE phase: 0% - 70% (no animation, content is stable)

      // EXIT phase: 70% - 100%
      scrollTl.fromTo(
        cardRef.current,
        { y: 0, opacity: 1, scale: 1 },
        { y: '-25vh', opacity: 0, scale: 0.9, ease: 'power2.in' },
        0.7
      );

      // Blobs fade out
      scrollTl.fromTo(
        '.blob-element',
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 1.2, ease: 'power2.in' },
        0.7
      );

      // Collage cards drift outward with rotation
      const collageCards = collageRef.current?.querySelectorAll('.collage-card');
      if (collageCards) {
        collageCards.forEach((card, i) => {
          const direction = i === 0 ? 1 : i === 1 ? -1 : 1;
          scrollTl.fromTo(
            card,
            { x: 0, opacity: 1, rotateZ: 0 },
            { 
              x: `${direction * 8}vw`, 
              opacity: 0, 
              rotateZ: direction * 10,
              ease: 'power2.in' 
            },
            0.7
          );
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetKit = () => {
    window.location.href = 'https://whop.com/sprout-ventures-academy/the-bounce-back-business-kit/';
  };

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-bg-primary flex items-center justify-center z-10 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div ref={blobsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-element absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-mint/20 to-emerald-300/10 blob opacity-0" />
        <div className="blob-element absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-paper-lavender/40 to-purple-200/20 blob opacity-0" style={{ animationDelay: '-2s' }} />
        <div className="blob-element absolute -bottom-20 right-1/4 w-72 h-72 bg-gradient-to-br from-paper-peach/30 to-orange-200/20 blob opacity-0" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Sprout background outline */}
      <svg
        className="sprout-bg absolute bottom-0 right-0 opacity-[0.04]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 180V100M100 100C100 80 80 60 60 50M100 100C100 80 120 60 140 50M100 140C85 140 70 125 70 110M100 140C115 140 130 125 130 110"
          stroke="#1A1D1F"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="100" cy="45" r="8" stroke="#1A1D1F" strokeWidth="1.5" />
      </svg>

      {/* Hero Card */}
      <div
        ref={cardRef}
        className="relative w-[90vw] max-w-[1150px] min-h-[65vh] bg-gradient-to-br from-paper-lavender via-paper-lavender to-purple-50/50 rounded-[32px] card-shadow p-8 lg:p-14 flex flex-col lg:flex-row items-start justify-between perspective-1000"
      >
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-mint/20 to-transparent rounded-tr-[32px] pointer-events-none" />
        
        {/* Left Content */}
        <div className="flex-1 max-w-xl z-10">
          {/* Eyebrow with sparkle */}
          <div className="eyebrow mb-5 flex items-center gap-2">
            <Sparkles className="sparkle-icon w-4 h-4 text-mint" />
            Parent-Led • 10-Min Routine
          </div>

          {/* Headline */}
          <div ref={headlineRef} className="mb-7 preserve-3d">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[56px] text-text-primary leading-[1.02]">
              <span className="headline-line block">Your child just failed.</span>
              <span className="headline-line block mt-1">
                <span className="bg-gradient-to-r from-mint to-emerald-500 bg-clip-text text-transparent">Here's what to say.</span>
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            ref={subheadRef}
            className="text-base lg:text-lg text-text-secondary/90 leading-relaxed mb-9 max-w-md"
          >
            A practical framework used by 200+ families to help kids ages 7-13
            calm down, capture facts, and bounce back stronger—in just 10 minutes.
          </p>

          {/* CTA Row */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-9">
            <button
              onClick={handleGetKit}
              className="btn-primary flex items-center gap-2 group"
            >
              Get the Kit — $79
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('whats-inside')}
              className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 group"
            >
              <span className="relative">
                See what's inside
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mint scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            </button>
          </div>

          {/* Trust Line */}
          <div ref={trustRef} className="flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-full">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="text-text-secondary font-medium">Used by 200+ families</span>
            </span>
            <span className="text-text-secondary/50">•</span>
            <span className="text-text-secondary font-medium">Ages 7–13</span>
          </div>
        </div>

        {/* Right Collage */}
        <div
          ref={collageRef}
          className="hidden lg:block relative w-[300px] h-[420px] mt-8 lg:mt-0 preserve-3d"
        >
          {/* Card A - Peach */}
          <div
            className="collage-card absolute right-[4%] top-[10%] w-40 h-32 bg-gradient-to-br from-paper-peach to-orange-50 rounded-2xl card-shadow flex flex-col items-center justify-center gap-2.5 animate-float cursor-pointer hover:scale-105 transition-transform"
            style={{ transform: 'rotate(-8deg)', animationDelay: '0s' }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
              <FileText className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
            </div>
            <span className="font-heading font-bold text-sm text-text-primary">
              Scripts
            </span>
          </div>

          {/* Card B - Cream */}
          <div
            className="collage-card absolute right-[12%] top-[36%] w-40 h-32 bg-gradient-to-br from-paper-cream to-yellow-50 rounded-2xl card-shadow flex flex-col items-center justify-center gap-2.5 animate-float cursor-pointer hover:scale-105 transition-transform"
            style={{ transform: 'rotate(5deg)', animationDelay: '-1.5s' }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
              <ClipboardList className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
            </div>
            <span className="font-heading font-bold text-sm text-text-primary">
              Template
            </span>
          </div>

          {/* Card C - Sky */}
          <div
            className="collage-card absolute right-[6%] top-[62%] w-40 h-32 bg-gradient-to-br from-paper-sky to-blue-50 rounded-2xl card-shadow flex flex-col items-center justify-center gap-2.5 animate-float cursor-pointer hover:scale-105 transition-transform"
            style={{ transform: 'rotate(-4deg)', animationDelay: '-3s' }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
              <Calendar className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
            </div>
            <span className="font-heading font-bold text-sm text-text-primary">
              Plan
            </span>
          </div>

          {/* Decorative dots */}
          <div className="absolute -bottom-4 left-8 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-mint/40" />
            <div className="w-2 h-2 rounded-full bg-mint/30" />
            <div className="w-2 h-2 rounded-full bg-mint/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
