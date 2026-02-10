import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Heart, Wind, Brain, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Recognize',
    description: 'Name the feeling.',
    script: '"You seem frustrated."',
    color: 'from-violet-100 to-purple-50',
    borderColor: 'border-violet-200',
    icon: Heart,
    iconColor: 'text-violet-500',
  },
  {
    number: '02',
    title: 'Reset',
    description: 'Move to a calm space.',
    script: '"Let\'s take a few minutes together."',
    color: 'from-orange-100 to-amber-50',
    borderColor: 'border-orange-200',
    icon: Wind,
    iconColor: 'text-orange-500',
  },
  {
    number: '03',
    title: 'Regulate',
    description: 'Breathe together.',
    script: '"In for four, out for four."',
    color: 'from-yellow-100 to-amber-50',
    borderColor: 'border-yellow-200',
    icon: Brain,
    iconColor: 'text-amber-500',
  },
  {
    number: '04',
    title: 'Reflect',
    description: 'Label what happened.',
    script: '"That sounds disappointing."',
    color: 'from-sky-100 to-blue-50',
    borderColor: 'border-sky-200',
    icon: Heart,
    iconColor: 'text-sky-500',
  },
  {
    number: '05',
    title: 'Ready',
    description: 'Shift to facts.',
    script: '"Now let\'s look at what actually happened."',
    color: 'from-emerald-100 to-mint/20',
    borderColor: 'border-emerald-200',
    icon: Target,
    iconColor: 'text-emerald-500',
  },
];

export default function The5RFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Left text block animation
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Progress bar animation
      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );

      // Step cards cascade reveal
      const stepCards = stepsRef.current?.querySelectorAll('.step-card');
      if (stepCards) {
        stepCards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: 60, rotateY: -10 },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Step number pop
          const numberEl = card.querySelector('.step-number');
          if (numberEl) {
            gsap.fromTo(
              numberEl,
              { scale: 0.5, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.5,
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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-bg-secondary py-24 lg:py-32 z-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column */}
          <div ref={leftRef} className="lg:w-[40%] lg:sticky lg:top-32 lg:self-start">
            <div className="eyebrow mb-4 text-mint">The Method</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[44px] text-text-primary mb-6 leading-tight">
              Calm first. Then{' '}
              <span className="bg-gradient-to-r from-mint to-emerald-500 bg-clip-text text-transparent">
                capture the facts.
              </span>
            </h2>
            <p className="text-base text-text-secondary/80 leading-relaxed mb-4">
              Most frameworks skip the messy middle. We don't. Stage 1 calms the
              nervous system. Stage 2 turns feelings into facts—so the next move
              is clear.
            </p>
            <p className="text-base text-text-secondary/80 leading-relaxed mb-8">
              This isn't about lecturing or rescuing. It's about giving your child
              the tools to process emotions and learn from every setback.
            </p>

            {/* Time Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg shadow-mint/10 border border-mint/20">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mint to-emerald-500 flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-mono text-sm font-bold text-text-primary">
                  10 minutes
                </span>
                <p className="text-xs text-text-secondary">per session</p>
              </div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:w-[60%] relative">
            {/* Progress line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block">
              <div 
                ref={progressRef}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-violet-400 via-mint to-emerald-500 origin-top"
                style={{ height: '100%' }}
              />
            </div>

            <div ref={stepsRef} className="space-y-5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-card relative bg-gradient-to-br ${step.color} rounded-2xl p-5 card-shadow border ${step.borderColor} hover:shadow-xl hover:shadow-mint/10 transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number with icon */}
                    <div className="step-number flex-shrink-0 w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                      <step.icon className={`w-5 h-5 ${step.iconColor}`} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs text-text-secondary/60">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-text-primary mb-1 group-hover:text-mint transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-secondary mb-2">
                        {step.description}
                      </p>
                      <p className="font-mono text-sm text-text-primary/70 italic bg-white/50 px-3 py-1.5 rounded-lg inline-block">
                        {step.script}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
