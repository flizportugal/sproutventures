import { CheckCircle2, Sparkles } from 'lucide-react';

export default function SVATransformation() {
  const outcomes = [
    {
      title: 'Started Their First Business',
      description: 'From idea to actual customers, money in hand, and lessons learned'
    },
    {
      title: 'Know How to Handle Rejection',
      description: 'When something doesn\'t work, they adjust instead of quitting'
    },
    {
      title: 'Understand Basic Financial Skills',
      description: 'Profit, loss, pricing, budgeting—real math they can actually use'
    },
    {
      title: 'Feel Confident Testing New Ideas',
      description: 'They\'re not afraid to try things because they know failure teaches them'
    },
    {
      title: 'See Themselves as Capable',
      description: 'Identity shift from "I can\'t" to "I\'m figuring this out"'
    },
    {
      title: 'Use Business Skills Everywhere',
      description: 'School projects, friend conflicts, sports—the frameworks transfer'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold">The Transformation</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            By The End of 3 Months,<br />
            Your Child Will:
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            This isn't about making your child perfect. It's about teaching them they can handle hard things. And that changes everything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-green-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{outcome.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <p className="text-2xl font-bold mb-4">
            This Is The Child Who Will:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <p className="text-white/90">
                ✓ Not quit at the first obstacle in high school
              </p>
            </div>
            <div>
              <p className="text-white/90">
                ✓ Handle rejection in relationships with grace
              </p>
            </div>
            <div>
              <p className="text-white/90">
                ✓ Approach career setbacks as learning opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
