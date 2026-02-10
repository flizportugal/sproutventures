import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Mail, Sparkles, Heart } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.8,
          onLeaveBack: () => {
            gsap.set(cardRef.current, { opacity: 1, y: 0, scale: 1 });
            gsap.set(headlineRef.current, { opacity: 1, y: 0 });
            gsap.set(bodyRef.current, { opacity: 1, y: 0 });
            gsap.set(ctaRef.current, { opacity: 1, y: 0 });
          },
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        cardRef.current,
        { y: '20vh', opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        bodyRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(
        ctaRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.15
      );

      // SETTLE (30% - 70%) - no animation, content is stable

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        cardRef.current,
        { y: 0, opacity: 1, scale: 1 },
        { y: '-12vh', opacity: 0, scale: 0.95, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleGetKit = () => {
    setShowDialog(true);
  };

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-bg-primary flex items-center justify-center z-30 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl" />
      </div>

      {/* Sprout background outline - top left this time */}
      <svg
        className="sprout-bg absolute top-0 left-0 opacity-[0.04]"
        viewBox="0 0 200 200"
        fill="none"
        style={{ transform: 'rotate(180deg)' }}
      >
        <path
          d="M100 180V100M100 100C100 80 80 60 60 50M100 100C100 80 120 60 140 50M100 140C85 140 70 125 70 110M100 140C115 140 130 125 130 110"
          stroke="#1A1D1F"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="100" cy="45" r="8" stroke="#1A1D1F" strokeWidth="1.5" />
      </svg>

      {/* CTA Card */}
      <div
        ref={cardRef}
        className="relative w-[90vw] max-w-[950px] min-h-[55vh] bg-gradient-to-br from-paper-lavender via-paper-lavender to-violet-50 rounded-[32px] card-shadow p-10 lg:p-16 flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-mint/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-violet-200/30 to-transparent rounded-full blur-2xl" />

        {/* Floating hearts */}
        <div className="absolute top-10 left-10 animate-float">
          <Heart className="w-6 h-6 text-mint/30 fill-mint/30" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float-slow">
          <Heart className="w-5 h-5 text-violet-300/40 fill-violet-300/40" />
        </div>

        {/* Sparkle icon */}
        <div className="mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mint to-emerald-500 flex items-center justify-center shadow-lg shadow-mint/30">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-heading font-black text-3xl sm:text-4xl lg:text-[52px] text-text-primary mb-6 max-w-2xl leading-tight"
        >
          Give your child the words to{' '}
          <span className="bg-gradient-to-r from-mint to-emerald-500 bg-clip-text text-transparent">
            bounce back.
          </span>
        </h2>

        {/* Body */}
        <p
          ref={bodyRef}
          className="text-base lg:text-lg text-text-secondary/80 leading-relaxed mb-10 max-w-md"
        >
          Get the Starter Kit. Start with calm. End with a plan.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col items-center gap-5">
          <button
            onClick={handleGetKit}
            className="btn-primary flex items-center gap-2 text-lg py-5 px-10 group"
          >
            Get the Kit — $79
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-text-secondary hover:text-mint transition-colors flex items-center gap-2 group"
          >
            <Mail className="w-4 h-4" />
            <span className="relative">
              Have questions? Contact us
              <span className="absolute bottom-0 left-0 w-full h-px bg-mint scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </span>
          </button>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-2xl text-text-primary">
              Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-text-secondary leading-relaxed">
              The Bounce-Back Business Kit will be available for purchase soon. Leave your email to be notified when it launches!
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-mint focus:border-transparent transition-all"
              />
              <button
                onClick={() => setShowDialog(false)}
                className="btn-primary py-3 px-6"
              >
                Notify Me
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
