import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Rocket, CheckCircle, Layers, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    title: 'Download',
    icon: Download,
    bullets: ['Print the worksheet + script card', 'Set up your 10-minute routine'],
    color: 'from-violet-100 to-purple-50',
    borderColor: 'border-violet-200',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-500',
  },
  {
    number: '2',
    title: 'Practice',
    icon: Layers,
    bullets: ['Run the 5R Flow at the next tough moment', 'Use the debrief worksheet'],
    color: 'from-orange-100 to-amber-50',
    borderColor: 'border-orange-200',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
  },
  {
    number: '3',
    title: 'Apply',
    icon: Rocket,
    bullets: ['Turn the next flop into a plan', 'Watch confidence grow'],
    color: 'from-sky-100 to-blue-50',
    borderColor: 'border-sky-200',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-500',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const arrowsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.step-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, rotateY: -15 },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              duration: 0.6,
              delay: index * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Icon animation
          const icon = card.querySelector('.step-icon');
          if (icon) {
            gsap.fromTo(
              icon,
              { rotation: -10, scale: 0.8 },
              {
                rotation: 0,
                scale: 1,
                duration: 0.5,
                delay: index * 0.15 + 0.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });
      }

      // Arrows animation
      const arrows = arrowsRef.current?.querySelectorAll('.arrow-connector');
      if (arrows) {
        gsap.fromTo(
          arrows,
          { opacity: 0, scaleX: 0 },
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="w-full bg-bg-secondary py-24 lg:py-32 z-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-mint/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-violet-200/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-6 lg:px-12 max-w-5xl mx-auto relative">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <div className="eyebrow mb-4 text-mint">How It Works</div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[48px] text-text-primary">
            Start today. Build the habit in{' '}
            <span className="bg-gradient-to-r from-mint to-emerald-500 bg-clip-text text-transparent">
              30 days.
            </span>
          </h2>
        </div>

        {/* Steps Grid with arrows */}
        <div className="relative">
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000"
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className={`step-card relative bg-gradient-to-br ${step.color} rounded-3xl p-7 lg:p-8 card-shadow border ${step.borderColor} hover:shadow-xl hover:shadow-mint/10 transition-all duration-500 group preserve-3d`}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm font-mono text-sm font-bold text-text-primary">
                    {step.number}
                  </div>
                  <div className={`step-icon w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300`}>
                    <step.icon className={`w-7 h-7 ${step.iconColor}`} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-text-primary mb-5 group-hover:text-mint transition-colors">
                  {step.title}
                </h3>

                {/* Bullets */}
                <ul className="space-y-3">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-text-secondary/80 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-mint flex-shrink-0 mt-0" strokeWidth={1.5} />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color.replace('from-', 'from-').replace('100', '400').replace('50', '200')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`} />
              </div>
            ))}
          </div>

          {/* Connecting arrows - desktop only */}
          <div ref={arrowsRef} className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
            <div className="flex justify-between px-[28%]">
              <div className="arrow-connector flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
                <ArrowRight className="w-5 h-5 text-mint" />
              </div>
              <div className="arrow-connector flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
                <ArrowRight className="w-5 h-5 text-mint" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
