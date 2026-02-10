import { Check, Shield } from 'lucide-react';

export default function SVAPricing() {
  const scrollToTrial = () => {
    window.open('#', '_blank');
  };

  const tiers = [
    {
      name: 'Sprout Starter',
      price: '$24.99',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        'Kid CEOs Program (8 weeks, 12 video lessons)',
        'Lemonade Stand Game (Interactive simulation)',
        'Parent Dashboard (Track progress & activities)',
        'Community Access (Connect with 1,200+ families)',
        'Fillable Worksheets & Templates',
        '30-Day Money-Back Guarantee'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Sprout Plus',
      price: '$39.99',
      period: '/month',
      description: 'Our most popular choice',
      features: [
        'Everything in Starter',
        'Junior Investors Program (Learn saving & investing)',
        'Live Q&A Sessions (2x per month with experts)',
        '20+ Bonus Worksheets & Business Templates',
        'Priority Email Support (Response in 24hrs)',
        'Monthly Progress Reports'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Sprout Premium',
      price: '$59.99',
      period: '/month',
      description: 'For serious young entrepreneurs',
      features: [
        'Everything in Plus',
        '1-on-1 Monthly Coaching (30-min personalized sessions)',
        'Advanced Business Tools (P&L tracker, Customer CRM)',
        'Exclusive Masterclasses (With real entrepreneurs)',
        'First Access to New Programs',
        'Private Slack Community'
      ],
      cta: 'Start Free Trial',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Invest in your child's future with affordable monthly plans or save with annual billing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 ${
                tier.popular ? 'ring-4 ring-green-500 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-sm text-slate-600 mb-3">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-slate-600">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToTrial}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto mb-12 border-2 border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Is Sprout Ventures Academy Worth It?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-slate-700 mb-3">Traditional Alternatives:</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• One month of tutoring: <strong>$300-600</strong></li>
                <li>• One entrepreneurship camp: <strong>$500-1,500</strong></li>
                <li>• One coding bootcamp: <strong>$200-400/month</strong></li>
                <li>• Family therapist session: <strong>$150-300/hour</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-3">Sprout Ventures Academy:</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Full year of access: <strong className="text-green-700">$299-719</strong></li>
                <li>• 8 structured programs</li>
                <li>• Live coaching & community</li>
                <li>• Unlimited worksheet access</li>
                <li>• Learn resilience + business skills</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-6">
            <p className="text-lg text-slate-700 text-center">
              <strong>What you're actually paying for:</strong> A proven curriculum tested by 1,200+ families that teaches your child the #1 skill for lifelong success: <span className="text-green-700 font-bold">How to bounce back from failure.</span>
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                100% Confidence Guarantee
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Try it for a full month. If you're not seeing increased confidence, engagement, or
                entrepreneurial thinking in your child, just email us. We'll refund you immediately—no
                forms, no hassle, no questions asked.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Need a custom solution for your school or organization?</p>
          <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
            Contact us for special pricing and customized curriculum →
          </a>
        </div>
      </div>
    </section>
  );
}
