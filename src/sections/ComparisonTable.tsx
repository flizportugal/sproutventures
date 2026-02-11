import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X, Sparkles, Zap, ChevronRight, Users, Clock, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    category: 'Core Framework',
    items: [
      { name: 'Stage 1: Calm (5R Flow)', starter: true, complete: true },
      { name: 'Stage 2: Facts (Debrief Worksheet)', starter: true, complete: true },
      { name: 'Stage 3: Test (Comeback Plans)', starter: false, complete: true },
      { name: 'Stage 4: Routine (Auto-Resilience)', starter: false, complete: true },
    ],
  },
  {
    category: 'Parent Resources',
    items: [
      { name: 'Parent Scripts', starter: '4 Essential', complete: '25+ Advanced' },
      { name: 'Real Scenario Walkthroughs', starter: false, complete: '30 Scenarios' },
      { name: 'Quick-Start Plan', starter: '30-Day', complete: '52-Week Roadmap' },
      { name: 'Troubleshooting Guide', starter: true, complete: true },
    ],
  },
  {
    category: 'Business Tools',
    items: [
      { name: 'Fillable Worksheets', starter: '2 Templates', complete: '7+ Templates' },
      { name: 'Printable Posters', starter: false, complete: '5 Posters' },
      { name: 'Progress Tracker', starter: 'Basic', complete: 'Advanced' },
      { name: 'Business Templates (P&L, etc.)', starter: false, complete: true },
    ],
  },
  {
    category: 'Support & Community',
    items: [
      { name: 'Private Community Access', starter: true, complete: true },
      { name: 'Monthly Group Coaching Calls', starter: false, complete: true },
      { name: '30-Day Money-Back Guarantee', starter: true, complete: true },
    ],
  },
];

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const recommendationRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        recommendationRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: recommendationRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleGetStarter = () => {
    window.location.href = 'https://whop.com/checkout/plan_4ZGoSmwZbFVmt';
  };

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-mint/20 flex items-center justify-center">
            <Check className="w-4 h-4 text-mint" strokeWidth={2.5} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <X className="w-4 h-4 text-gray-300" strokeWidth={2} />
        </div>
      );
    }
    return (
      <div className="text-sm font-medium text-text-primary text-center">
        {value}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className="w-full bg-bg-secondary py-24 lg:py-32 z-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-mint/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-violet-200/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-6 lg:px-12 max-w-5xl mx-auto relative">
        <div ref={headingRef} className="text-center mb-14">
          <div className="eyebrow mb-4 text-mint">Choose Your Kit</div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[48px] text-text-primary mb-6">
            Which kit is{' '}
            <span className="bg-gradient-to-r from-mint to-emerald-500 bg-clip-text text-transparent">
              right for you?
            </span>
          </h2>
          <p className="text-base text-text-secondary/80 max-w-2xl mx-auto leading-relaxed">
            Start with the foundation (Starter Kit), then upgrade when you're ready for advanced tools.
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div ref={tableRef} className="hidden lg:block pt-6">
          <div className="bg-white rounded-3xl card-shadow overflow-hidden border border-gray-100 relative">
            {/* Header */}
            <div className="grid grid-cols-3 gap-0 border-b border-gray-100">
              <div className="p-6"></div>

              {/* Starter Kit Column Header */}
              <div className="bg-gradient-to-br from-paper-lavender to-violet-50 p-6 border-l border-r border-violet-100 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-mint to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    RECOMMENDED
                  </div>
                </div>
                <h3 className="font-heading font-black text-2xl text-text-primary mb-2 text-center mt-2">
                  Starter Kit
                </h3>
                <div className="text-center mb-4">
                  <div className="text-sm text-text-secondary/60 line-through">$79</div>
                  <span className="font-heading font-black text-4xl text-text-primary">$37</span>
                  <p className="text-sm text-text-secondary mt-1">One-time purchase</p>
                </div>
                <div className="flex flex-col gap-2 text-xs text-text-secondary text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4 text-mint" />
                    <span>First-time users</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-mint" />
                    <span>2-4 weeks to complete</span>
                  </div>
                </div>
              </div>

              {/* Complete Kit Column Header */}
              <div className="bg-gradient-to-br from-paper-cream to-yellow-50 p-6 relative">
                <h3 className="font-heading font-black text-2xl text-text-primary mb-2 text-center">
                  Complete Kit
                </h3>
                <div className="text-center mb-4">
                  <span className="font-heading font-black text-4xl text-text-primary">$97</span>
                  <p className="text-sm text-text-secondary mt-1">
                    One-time • <span className="text-amber-600 font-semibold">$47 upgrade</span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-xs text-text-secondary text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-4 h-4 text-amber-500" />
                    <span>Advanced users</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>8-12 weeks complete</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="grid grid-cols-3 gap-0 bg-gray-50 border-b border-gray-100">
                  <div className="col-span-3 px-6 py-3">
                    <h4 className="font-heading font-bold text-sm text-text-primary uppercase tracking-wider">
                      {category.category}
                    </h4>
                  </div>
                </div>
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="grid grid-cols-3 gap-0 border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="px-6 py-4 flex items-center">
                      <span className="text-sm text-text-secondary">{item.name}</span>
                    </div>
                    <div className="px-6 py-4 flex items-center justify-center border-l border-r border-violet-100 bg-gradient-to-br from-paper-lavender/30 to-transparent">
                      {renderFeatureValue(item.starter)}
                    </div>
                    <div className="px-6 py-4 flex items-center justify-center bg-gradient-to-br from-paper-cream/30 to-transparent">
                      {renderFeatureValue(item.complete)}
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-3 gap-0 p-6 bg-gray-50">
              <div></div>
              <div className="px-4">
                <button
                  onClick={handleGetStarter}
                  className="btn-primary w-full flex items-center justify-center gap-2 group"
                >
                  Get Starter Kit
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="px-4">
                <button
                  onClick={handleGetStarter}
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-white font-heading font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Get Complete Kit
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-6 pt-6">
          {/* Starter Kit Card */}
          <div className="bg-gradient-to-br from-paper-lavender to-violet-50 rounded-3xl card-shadow border border-violet-200 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-mint to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                RECOMMENDED
              </div>
            </div>

            <div className="p-6 text-center mt-2">
              <h3 className="font-heading font-black text-2xl text-text-primary mb-2">
                Starter Kit
              </h3>
              <div className="mb-4">
                <div className="text-base text-text-secondary/60 line-through mb-1">$79</div>
                <span className="font-heading font-black text-5xl text-text-primary">$37</span>
                <p className="text-sm text-text-secondary mt-1">One-time purchase</p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-white/60 rounded-full px-3 py-1.5 text-xs text-text-secondary">
                  <Users className="w-3.5 h-3.5 text-mint" />
                  First-time users
                </span>
                <span className="inline-flex items-center gap-2 bg-white/60 rounded-full px-3 py-1.5 text-xs text-text-secondary">
                  <Clock className="w-3.5 h-3.5 text-mint" />
                  2-4 weeks
                </span>
              </div>

              <div className="text-left space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Stage 1 & 2: Calm + Facts</p>
                    <p className="text-xs text-text-secondary">5R Flow & Debrief Worksheet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">4 Essential Parent Scripts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">30-Day Quick-Start Plan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Community Access</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm text-text-secondary line-through">30 Scenario Walkthroughs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm text-text-secondary line-through">Stages 3-4 (Advanced)</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleGetStarter}
                className="btn-primary w-full flex items-center justify-center gap-2 group"
              >
                Get Starter Kit — <span className="line-through opacity-60">$79</span> $37
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Complete Kit Card */}
          <div className="bg-gradient-to-br from-paper-cream to-yellow-50 rounded-3xl card-shadow overflow-hidden border border-yellow-200 relative">
            <div className="absolute top-4 right-4">
              <div className="inline-flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                <Zap className="w-3 h-3" />
                ADVANCED
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="font-heading font-black text-2xl text-text-primary mb-2">
                Complete Kit
              </h3>
              <div className="mb-4">
                <span className="font-heading font-black text-5xl text-text-primary">$97</span>
                <p className="text-sm text-text-secondary mt-1">
                  One-time • <span className="text-amber-600 font-semibold">$47 to upgrade</span>
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-white/60 rounded-full px-3 py-1.5 text-xs text-text-secondary">
                  <Target className="w-3.5 h-3.5 text-amber-500" />
                  Advanced users
                </span>
                <span className="inline-flex items-center gap-2 bg-white/60 rounded-full px-3 py-1.5 text-xs text-text-secondary">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  8-12 weeks
                </span>
              </div>

              <div className="text-left space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Everything in Starter, PLUS:</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Stages 3-4: Test & Routine</p>
                    <p className="text-xs text-text-secondary">Comeback plans & auto-resilience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">30 Real Scenario Walkthroughs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">25+ Advanced Scripts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">7 Business Templates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">52-Week Roadmap</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Priority Community + Monthly Calls</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleGetStarter}
                className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-white font-heading font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Get Complete Kit — $97
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Recommendation Box */}
        <div
          ref={recommendationRef}
          className="mt-10 bg-gradient-to-br from-mint/10 to-emerald-100/30 rounded-2xl p-6 lg:p-8 border border-mint/20"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-mint/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-mint" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-text-primary mb-2">
                💡 Recommended Path
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                <strong className="text-text-primary">Start with the Starter Kit ($37)</strong> → Master Stages 1-2 over 2-4 weeks →
                <strong className="text-text-primary"> Upgrade to Complete Kit ($47)</strong> when you're ready for Stages 3-4.
              </p>
              <p className="text-xs text-text-secondary/80 italic">
                <strong>Why?</strong> The foundation (calm + facts) must be solid before testing comeback plans.
                88% of parents upgrade within 6 weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
