import { UserPlus, Rocket, TrendingUp, Clock } from 'lucide-react';

export default function SVAHowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Choose Your Plan & Create Account',
      description: 'Select the program level that fits your child. Set up takes less than 2 minutes. No credit card required for 7-day trial.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Explore & Learn',
      description: 'Your child engages with interactive courses, games, and challenges that teach entrepreneurial skills in a fun way.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Apply & Grow',
      description: 'Kids apply what they\'ve learned through real-world projects, earning badges and advancing to new levels.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const timeline = [
    { week: 'Week 1', milestone: 'First business idea mapped' },
    { week: 'Month 1', milestone: 'First sale or project completed' },
    { week: 'Month 3', milestone: 'Running a mini-business with confidence' },
    { week: 'Month 6', milestone: 'Advanced skills and potential earnings' }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How Sprout Ventures Academy Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our platform combines interactive learning, gamification, and real-world application to make
            entrepreneurship education engaging and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-slate-200 rounded-full text-sm font-semibold text-slate-700 mb-3">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-green-600" />
            <h3 className="text-3xl font-bold text-slate-900">What to Expect</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-sm font-semibold text-green-600 mb-2">{item.week}</div>
                <div className="text-slate-900 font-medium leading-snug">{item.milestone}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 mt-8 text-sm">
            Results vary by child, but most families see noticeable confidence growth within the first month
          </p>
        </div>
      </div>
    </section>
  );
}
