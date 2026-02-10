import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ChevronRight, ArrowRight, Sparkles, Zap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const features = [
  '5R Flow Script Card',
  'Setback Debrief Worksheet',
  '30-Day Quick-Start Plan',
  'Parent Cheat Sheet',
  'Private community access',
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '' });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Pricing card animation with 3D flip
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, rotateX: -10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Features stagger
      const featureItems = cardRef.current?.querySelectorAll('.feature-item');
      if (featureItems) {
        gsap.fromTo(
          featureItems,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.08,
            delay: 0.3,
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleGetKit = () => {
    window.location.href = 'https://whop.com/sprout-ventures-academy/the-bounce-back-business-kit/';
  };

  const handleCompleteKit = () => {
    setDialogContent({
      title: 'Complete Kit',
      message: 'The Complete Kit with Stages 3 & 4 (micro-tests, tracking tools, and advanced scripts) will be available soon. Sign up to get early access!',
    });
    setShowDialog(true);
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="w-full bg-bg-primary py-24 lg:py-32 z-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-mint/10 to-transparent rounded-full" />
      </div>

      <div className="w-full px-6 lg:px-12 max-w-3xl mx-auto relative pt-6">
        {/* Main Pricing Card */}
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-paper-lavender via-paper-lavender to-violet-50 rounded-[32px] p-8 lg:p-14 card-shadow text-center perspective-1000"
        >
          {/* Decorative elements - clipped to card */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-mint/20 to-transparent rounded-full blur-2xl overflow-hidden rounded-[32px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-200/30 to-transparent rounded-full blur-2xl overflow-hidden rounded-[32px]" />

          {/* Popular badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-mint to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-mint/30">
              <Sparkles className="w-3.5 h-3.5" />
              MOST POPULAR
            </div>
          </div>

          {/* Eyebrow */}
          <div className="eyebrow mb-5 text-violet-500 mt-4">The Starter Kit</div>

          {/* Price with Value Stack */}
          <div className="mb-3">
            <div className="inline-block">
              <div className="text-sm text-text-secondary/60 line-through mb-1">$187 value</div>
              <span className="font-heading font-black text-6xl lg:text-7xl bg-gradient-to-r from-text-primary to-violet-600 bg-clip-text text-transparent">
                $79
              </span>
            </div>
          </div>
          <p className="text-sm text-text-secondary mb-2">
            One-time purchase. Lifetime access.
          </p>
          <p className="text-xs text-mint font-semibold mb-10">
            You save $108 (58% off)
          </p>

          {/* Features */}
          <ul className="space-y-4 mb-10 max-w-sm mx-auto text-left">
            {features.map((feature, index) => (
              <li
                key={index}
                className="feature-item flex items-center gap-4 text-sm text-text-primary"
              >
                <div className="w-6 h-6 rounded-lg bg-mint/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-mint" strokeWidth={2.5} />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={handleGetKit}
            className="btn-primary w-full max-w-sm flex items-center justify-center gap-2 text-lg mb-4 group"
          >
            Get the Kit
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Guarantee */}
          <p className="text-xs text-text-secondary/70 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-mint" />
            30-Day Money-Back Guarantee
          </p>
        </div>

        {/* Complete Kit Teaser */}
        <div className="mt-8 bg-gradient-to-br from-paper-cream to-yellow-50 rounded-2xl p-6 card-shadow border border-yellow-100 flex flex-col sm:flex-row items-center justify-between gap-4 group hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 cursor-pointer"
          onClick={handleCompleteKit}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-lg shadow-amber-200">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">
                Looking for Stages 3 & 4?
              </p>
              <p className="font-heading font-bold text-text-primary">
                See the Complete Kit
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-text-primary group-hover:text-mint transition-colors">
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-2xl text-text-primary">
              {dialogContent.title}
            </DialogTitle>
            <DialogDescription className="text-text-secondary leading-relaxed">
              {dialogContent.message}
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
