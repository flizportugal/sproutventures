import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, FileSpreadsheet, CalendarDays, StickyNote, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: MessageSquare,
    title: '5R Flow Script Card',
    bullets: ['Exact words to calm a meltdown', 'Step-by-step emotional reset', 'Use in the moment'],
    color: 'from-violet-100 to-purple-50',
    borderColor: 'border-violet-200',
    iconColor: 'text-violet-500',
    bgIcon: 'bg-violet-100',
  },
  {
    icon: FileSpreadsheet,
    title: 'Setback Debrief Worksheet',
    bullets: ['Turn drama into data in 10 minutes', 'Capture facts, not feelings', 'Spot patterns over time'],
    color: 'from-orange-100 to-amber-50',
    borderColor: 'border-orange-200',
    iconColor: 'text-orange-500',
    bgIcon: 'bg-orange-100',
  },
  {
    icon: CalendarDays,
    title: '30-Day Quick-Start Plan',
    bullets: ['Build the habit without overwhelm', 'One small action per day', 'Track your progress'],
    color: 'from-yellow-100 to-amber-50',
    borderColor: 'border-yellow-200',
    iconColor: 'text-amber-500',
    bgIcon: 'bg-yellow-100',
  },
  {
    icon: StickyNote,
    title: 'Parent Cheat Sheet',
    bullets: ['Quick reminders in the moment', 'Common scenarios covered', 'Keep in your back pocket'],
    color: 'from-sky-100 to-blue-50',
    borderColor: 'border-sky-200',
    iconColor: 'text-sky-500',
    bgIcon: 'bg-sky-100',
  },
];

export default function WhatsInside() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards stagger animation with 3D flip
      const cardElements = cardsRef.current?.querySelectorAll('.feature-card');
      if (cardElements) {
        cardElements.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, rotateX: -15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 80%',
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
      id="whats-inside"
      className="w-full bg-bg-primary py-24 lg:py-32 z-20 relative"
    >
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <div className="eyebrow mb-4 text-mint">What's Inside</div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[48px] text-text-primary">
            Four tools. One{' '}
            <span className="bg-gradient-to-r from-mint to-emerald-500 bg-clip-text text-transparent">
              repeatable
            </span>{' '}
            routine.
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`feature-card group relative bg-gradient-to-br ${card.color} rounded-3xl p-6 card-shadow card-hover border ${card.borderColor} preserve-3d cursor-pointer overflow-hidden`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/30 transition-colors duration-500" />
              
              {/* Corner arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className={`w-5 h-5 ${card.iconColor}`} />
              </div>

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl ${card.bgIcon} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                <card.icon className={`w-7 h-7 ${card.iconColor}`} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="relative font-heading font-bold text-lg text-text-primary mb-4 group-hover:text-mint transition-colors">
                {card.title}
              </h3>
              <ul className="relative space-y-2.5">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-text-secondary/80 flex items-start gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${card.bgIcon.replace('bg-', 'bg-').replace('100', '400')} mt-1.5 flex-shrink-0`} />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color.replace('from-', 'from-').replace('100', '400').replace('50', '200')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
