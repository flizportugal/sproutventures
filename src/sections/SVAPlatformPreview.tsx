import { Monitor, Tablet, Smartphone } from 'lucide-react';

export default function SVAPlatformPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            See Inside the Platform
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A kid-friendly interface designed for ages 6-14, accessible on any device
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-xl p-2 shadow-xl">
              <img
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Child using tablet for educational entrepreneurship learning on Sprout Ventures platform"
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Interactive Dashboard</h3>
              <p className="text-slate-600 text-sm">
                Track progress, earn badges, and manage projects in one place
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-xl p-2 shadow-xl">
              <img
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Young student engaged with educational technology showing gamified learning interface"
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Gamified Learning</h3>
              <p className="text-slate-600 text-sm">
                Fun, interactive lessons that keep kids engaged and motivated
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <Monitor className="w-12 h-12 text-green-600 mb-3" />
              <div className="font-semibold text-slate-900">Desktop</div>
              <div className="text-sm text-slate-600">Full Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Tablet className="w-12 h-12 text-blue-600 mb-3" />
              <div className="font-semibold text-slate-900">Tablet</div>
              <div className="text-sm text-slate-600">Touch Optimized</div>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone className="w-12 h-12 text-purple-600 mb-3" />
              <div className="font-semibold text-slate-900">Mobile</div>
              <div className="text-sm text-slate-600">Learn Anywhere</div>
            </div>
          </div>
          <p className="text-center text-slate-600 mt-6">
            Works seamlessly across all devices - learn anytime, anywhere
          </p>
        </div>
      </div>
    </section>
  );
}
