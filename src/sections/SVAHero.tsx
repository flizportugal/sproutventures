import { Star, ChevronDown } from 'lucide-react';

export default function SVAHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" style={{ backgroundSize: '30px 30px' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-8">
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/40?img=1" alt="Parent" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=2" alt="Parent" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=3" alt="Parent" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=4" alt="Parent" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-slate-700">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span>Rated 4.9/5 by 1,200+ parents</span>
            <span className="mx-2">|</span>
            <span className="text-green-700">89% of kids start their first business in 90 days</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Your Child's First Business Just Failed.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
            Here's What Actually Works.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-4xl mx-auto leading-relaxed">
          The only program that teaches kids ages 6-14 what to do when things go wrong—not just how to start, but how to bounce back, learn from setbacks, and build real resilience.
        </p>

        <p className="text-lg text-slate-500 mb-8 max-w-3xl mx-auto">
          Through interactive games, real projects, and proven frameworks, your child learns the one skill that matters most: <strong className="text-slate-700">How to handle failure like an entrepreneur.</strong>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Start Your 7-Day Free Trial
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold rounded-lg shadow hover:shadow-lg transition-all"
          >
            See How It Works
          </button>
        </div>

        <div className="text-sm text-slate-500">
          No Credit Card Required • Full Access to All Starter Features • Cancel Anytime
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
          <span>Trusted by forward-thinking parents and educators worldwide</span>
        </div>

        <div className="mt-4 animate-bounce cursor-pointer" onClick={() => scrollToSection('skills')}>
          <ChevronDown className="w-8 h-8 mx-auto lg:mx-0 text-slate-400" />
        </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                  alt="Children collaborating on creative entrepreneurial project with colorful materials"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-slate-900">Real Results</div>
                      <div className="text-xs text-slate-600">1,200+ Success Stories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
