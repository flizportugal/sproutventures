import { AlertCircle, XCircle } from 'lucide-react';

export default function SVAProblemSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-semibold text-red-300">The Hidden Problem</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Most Entrepreneurship Programs<br />
            Teach the Wrong Things
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            They teach pricing. Marketing. Pitch decks.<br />
            Important stuff, sure.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 md:p-12 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-red-400">But They Skip The Part That Actually Matters:</h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-200">
                <strong>What happens when your child's first business fails?</strong><br />
                <span className="text-slate-400">When nobody buys? When they feel embarrassed? When they want to quit?</span>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-200">
                <strong>What do you say in that moment?</strong><br />
                <span className="text-slate-400">Most parents freeze. Unsure whether to rescue, lecture, or stay silent.</span>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-200">
                <strong>How do kids learn resilience vs. helplessness?</strong><br />
                <span className="text-slate-400">One failed lemonade stand becomes either "I'm bad at this" or "Let me try something different."</span>
              </p>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-xl text-slate-200 font-semibold mb-4">
              90% of parents get stuck here.
            </p>
            <p className="text-lg text-slate-300">
              They teach their kids to start businesses. But not what to do when things go wrong.<br />
              They focus on success strategies. But ignore failure navigation.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-green-400 mb-4">
            That's The Messy Middle. And Nobody Teaches You How To Navigate It.
          </p>
          <p className="text-lg text-slate-300">
            Until Sprout Ventures Academy.
          </p>
        </div>
      </div>
    </section>
  );
}
