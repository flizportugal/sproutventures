import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, HelpCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'How long does each session take?',
    answer: 'About 10 minutes. The 5R Flow is designed to be quick and effective—calm first, then capture the facts. No long lectures, no overwhelming processes.',
  },
  {
    question: 'What if my child is very sensitive?',
    answer: 'Stage 1 is built for exactly that—calm comes first. The 5R Flow uses emotional regulation techniques backed by research to help sensitive kids process feelings before moving to problem-solving.',
  },
  {
    question: 'Do I need business experience?',
    answer: 'No. You get exact words and a simple worksheet. The kit is designed for any parent, regardless of background. You just need the willingness to coach, not rescue.',
  },
  {
    question: 'Will this work for homework/sports?',
    answer: 'Yes. The routine transfers to any setback—homework frustration, sports disappointments, friendship challenges. The calm-first, facts-next approach works everywhere.',
  },
  {
    question: 'Is there a guarantee?',
    answer: "Yes. 30-day money-back guarantee. If the kit doesn't help your family handle setbacks better, we'll refund your purchase—no questions asked.",
  },
  {
    question: "What's the difference between Starter and Complete?",
    answer: "Starter = Stages 1–2 (calm + facts). Complete adds Stages 3–4 with micro-tests, tracking tools, comeback plans, and 30+ advanced parent scripts for when you're ready to go deeper.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

      // FAQ items animation
      const items = itemsRef.current?.querySelectorAll('.faq-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: itemsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="w-full bg-bg-primary py-24 lg:py-32 z-20 relative"
    >
      <div className="w-full px-6 lg:px-12 max-w-3xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-mint" />
            </div>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[48px] text-text-primary">
            Questions?{' '}
            <span className="bg-gradient-to-r from-mint to-emerald-500 bg-clip-text text-transparent">
              Answers.
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div ref={itemsRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-mint/30 shadow-lg shadow-mint/5' 
                  : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left group"
              >
                <span className={`font-heading font-bold text-base pr-4 transition-colors ${
                  openIndex === index ? 'text-mint' : 'text-text-primary group-hover:text-mint'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-mint text-white rotate-180' 
                    : 'bg-gray-100 text-text-secondary group-hover:bg-mint/10 group-hover:text-mint'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm text-text-secondary/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
