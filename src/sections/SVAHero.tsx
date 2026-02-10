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

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
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

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Give Your Child the Skills<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
            Schools Don't Teach
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Sprout Ventures Academy gives kids ages 6-14 the creativity, confidence, and business skills
          to turn their ideas into reality—through interactive games, real projects, and expert guidance.
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
          <ChevronDown className="w-8 h-8 mx-auto text-slate-400" />
        </div>
      </div>
    </section>
  );
}
