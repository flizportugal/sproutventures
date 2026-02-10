import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Users, Award, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: TrendingUp, value: 95, suffix: '%', label: 'calm faster' },
  { icon: Users, value: 88, suffix: '%', label: 'parents feel confident' },
  { icon: Award, value: 200, suffix: '+', label: 'families' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            setCount(Math.round(this.targets()[0].val));
          }
        });
      },
      once: true
    });
  }, [value]);

  return (
    <span ref={ref} className="font-heading font-black text-4xl lg:text-5xl text-text-primary">
      {count}{suffix}
    </span>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Stats animation
      const statChips = statsRef.current?.querySelectorAll('.stat-chip');
      if (statChips) {
        gsap.fromTo(
          statChips,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Quote card animation
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Research cards animation
      const researchCards = researchRef.current?.querySelectorAll('.research-card');
      if (researchCards) {
        researchCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: index === 0 ? -50 : 50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-bg-primary py-24 lg:py-32 z-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-mint/5 to-transparent rounded-full pointer-events-none" />

      <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto relative">
        {/* Stats Row */}
        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-5 mb-14"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-chip group relative bg-white rounded-3xl p-6 card-shadow border border-gray-100 hover:border-mint/30 hover:shadow-xl hover:shadow-mint/10 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mint/20 to-emerald-100 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-mint/20 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-mint" strokeWidth={1.5} />
                </div>
                <div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Card */}
        <div
          ref={quoteRef}
          className="relative bg-gradient-to-br from-paper-lavender to-violet-50 rounded-3xl p-8 lg:p-12 card-shadow mb-10 overflow-hidden"
        >
          {/* Quote icon decoration */}
          <div className="absolute top-6 right-6 opacity-20">
            <Quote className="w-16 h-16 text-violet-400" />
          </div>
          
          <blockquote className="relative font-heading font-bold text-xl lg:text-2xl text-text-primary mb-5 leading-relaxed">
            "I used to freeze. Now I have the exact words."
          </blockquote>
          <cite className="relative text-sm text-text-secondary not-italic flex items-center gap-2">
            <span className="w-8 h-0.5 bg-mint rounded-full" />
            Parent, Portland
          </cite>
        </div>

        {/* Research Cards */}
        <div ref={researchRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="research-card group bg-gradient-to-br from-paper-peach to-orange-50 rounded-2xl p-6 card-shadow border border-orange-100 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300">
            <div className="font-mono text-xs text-orange-400 mb-3 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              Research
            </div>
            <p className="text-base text-text-primary leading-relaxed font-medium">
              "Praising effort builds persistence."
            </p>
            <p className="text-sm text-text-secondary mt-3 flex items-center gap-2">
              <span className="w-6 h-px bg-orange-300" />
              Dweck, Mindset
            </p>
          </div>

          <div className="research-card group bg-gradient-to-br from-paper-sky to-blue-50 rounded-2xl p-6 card-shadow border border-sky-100 hover:shadow-lg hover:shadow-sky-100 transition-all duration-300">
            <div className="font-mono text-xs text-sky-400 mb-3 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Research
            </div>
            <p className="text-base text-text-primary leading-relaxed font-medium">
              "Grit predicts achievement beyond talent."
            </p>
            <p className="text-sm text-text-secondary mt-3 flex items-center gap-2">
              <span className="w-6 h-px bg-sky-300" />
              Duckworth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
