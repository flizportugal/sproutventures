import { Sparkles, CheckCircle } from 'lucide-react';

export default function SVAFinalCTA() {
  const benefits = [
    'No Credit Card Required',
    'Full Access to All Starter Features',
    'Cancel Anytime',
    'Only $24.99/mo After Trial'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.3))]"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-white font-semibold text-sm">Limited Time Offer</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Nurture Your Child's<br />
          Entrepreneurial Journey?
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join 1,200+ families giving their kids an unfair advantage. While other children memorize for
          tests, yours will be building businesses, managing money, and developing the creativity and
          confidence that can't be taught in traditional classrooms.
        </p>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto mb-8">
          <div className="mb-6">
            <div className="text-5xl font-bold text-slate-900 mb-2">
              7-Day Free Trial
            </div>
            <div className="text-slate-600 text-lg">
              Experience the full platform risk-free
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-left">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-4 px-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Start Your Free Trial Now
          </button>

          <p className="text-sm text-slate-500 mt-4">
            Join today and get our "Young Entrepreneur's Toolkit" ($97 value) FREE!
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>30-Day Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>No Long-Term Commitment</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
